import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImageDownloadService {
  private readonly logger = new Logger(ImageDownloadService.name);
  private readonly uploadDir: string;
  private readonly maxConcurrent = 5;
  private activeCount = 0;
  private pending: Array<() => void> = [];
  /** 标记正在处理的 hotspot，避免重复抓取 */
  private scraping = new Set<number>();

  constructor(private prisma: PrismaService) {
    this.uploadDir = path.resolve(process.cwd(), 'uploads', 'hotspot');
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  /**
   * 【新】从 contentUrl 抓取真实图片（替代AI编造的假URL）
   * 1. 取没有 localImageUrl 的热点
   * 2. 访问其 contentUrl 页面
   * 3. 提取 <img> 标签的 src
   * 4. 下载图片到本地
   */
  async scrapeAndDownload(hotspotIds: number[]): Promise<void> {
    const hotspots = await this.prisma.hotspot.findMany({
      where: {
        id: { in: hotspotIds },
        contentUrl: { not: null },
        localImageUrl: null,
      },
      select: { id: true, contentUrl: true },
    });

    if (hotspots.length === 0) {
      this.logger.log('No hotspots need image scraping');
      return;
    }

    this.logger.log(
      `Starting image scrape for ${hotspots.length} hotspots`,
    );

    for (const h of hotspots) {
      if (!h.contentUrl || this.scraping.has(h.id)) continue;
      this.scraping.add(h.id);
      // 不 await，异步并发
      this.scrapeOne(h.id, h.contentUrl).finally(() =>
        this.scraping.delete(h.id),
      );
    }
  }

  private async scrapeOne(
    hotspotId: number,
    pageUrl: string,
  ): Promise<void> {
    await this.waitSlot();
    try {
      this.logger.log(
        `🌐 Scraping images from: ${pageUrl.substring(0, 100)}`,
      );

      // 抓取页面 HTML
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      const response = await fetch(pageUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        },
      });
      clearTimeout(timeout);

      if (!response.ok) {
        this.logger.warn(
          `Page fetch failed for #${hotspotId}: HTTP ${response.status}`,
        );
        return;
      }

      const html = await response.text();
      const imgUrls = this.extractImageUrlsFromHtml(html, pageUrl);

      if (imgUrls.length === 0) {
        this.logger.warn(`No images found on page for #${hotspotId}`);
        return;
      }

      this.logger.log(
        `Found ${imgUrls.length} images on page for #${hotspotId}, downloading...`,
      );

      // 下载前3张图片
      const localPaths: string[] = [];
      for (let i = 0; i < Math.min(imgUrls.length, 5); i++) {
        const localUrl = await this.downloadOneImage(
          hotspotId,
          imgUrls[i],
          i,
        );
        if (localUrl) localPaths.push(localUrl);
      }

      // 更新数据库
      if (localPaths.length > 0) {
        await this.prisma.hotspot.update({
          where: { id: hotspotId },
          data: {
            imageUrl: localPaths[0],
            localImageUrl: localPaths[0],
            images: localPaths,
          },
        });
        this.logger.log(
          `✅ Scraped ${localPaths.length} images for #${hotspotId}`,
        );
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') {
        this.logger.warn(
          `Scrape error for #${hotspotId}: ${err.message}`,
        );
      }
    } finally {
      this.releaseSlot();
    }
  }

  /** 从 HTML 中提取图片 URL（过滤头像/图标/占位图） */
  private extractImageUrlsFromHtml(
    html: string,
    baseUrl: string,
  ): string[] {
    const imgRegex = /<img[^>]+src\s*=\s*["']([^"']+)["'][^>]*>/gi;
    const srcsetRegex = /<img[^>]+srcset\s*=\s*["']([^"']+)["'][^>]*>/gi;
    const seen = new Set<string>();
    const urls: string[] = [];

    // 从 src 属性提取
    let match;
    while ((match = imgRegex.exec(html)) !== null) {
      const src = match[1].trim();
      if (this.isValidImageUrl(src)) {
        const resolved = this.resolveUrl(src, baseUrl);
        if (!seen.has(resolved)) {
          seen.add(resolved);
          urls.push(resolved);
        }
      }
    }

    // 从 srcset 提取（取最大的那张）
    while ((match = srcsetRegex.exec(html)) !== null) {
      const srcset = match[1];
      const candidates = srcset
        .split(',')
        .map((s) => s.trim().split(/\s+/)[0])
        .filter((s) => s && this.isValidImageUrl(s));
      if (candidates.length > 0) {
        const resolved = this.resolveUrl(
          candidates[candidates.length - 1],
          baseUrl,
        );
        if (!seen.has(resolved)) {
          seen.add(resolved);
          urls.push(resolved);
        }
      }
    }

    return urls.slice(0, 8); // 最多8张
  }

  /** 过滤无效图片URL */
  private isValidImageUrl(url: string): boolean {
    if (!url || url.startsWith('data:')) return false;
    const lower = url.toLowerCase();
    // 过滤小图标/头像/logo
    const skipPatterns = [
      'avatar', 'icon', 'logo', 'favicon', 'pixel',
      '1x1', 'blank', 'spacer', 'tracking', 'beacon',
      ' badge', '-badge', 'emoji', 'svg',
    ];
    for (const p of skipPatterns) {
      if (lower.includes(p)) return false;
    }
    // 过滤太小的图片（通过URL特征判断）
    if (/\/\d+x\d+[./]/.test(lower)) {
      const sizeMatch = lower.match(/\/(\d+)x(\d+)[./]/);
      if (sizeMatch) {
        const w = parseInt(sizeMatch[1]);
        const h = parseInt(sizeMatch[2]);
        if (w < 100 && h < 100) return false;
      }
    }
    return true;
  }

  /** 解析相对URL为绝对URL */
  private resolveUrl(src: string, baseUrl: string): string {
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }
    if (src.startsWith('//')) {
      return 'https:' + src;
    }
    try {
      return new URL(src, baseUrl).href;
    } catch {
      return src;
    }
  }

  /** 下载单张图片到本地 */
  private async downloadOneImage(
    hotspotId: number,
    url: string,
    index: number,
  ): Promise<string | null> {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Referer: new URL(url).origin,
        },
      });
      clearTimeout(timeout);

      if (!response.ok) return null;

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.startsWith('image/')) return null;

      // 检查文件大小（跳过太小的图）
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 2048) return null; // < 2KB 跳过

      const ext = this.getExt(contentType);
      const filename = `${hotspotId}_${index}_${Date.now()}.${ext}`;
      const filePath = path.join(this.uploadDir, filename);
      fs.writeFileSync(filePath, buffer);

      const localUrl = `/uploads/hotspot/${filename}`;
      const sizeKB = (buffer.length / 1024).toFixed(1);
      this.logger.log(
        `  📷 [${index}] ${localUrl} (${sizeKB}KB)`,
      );
      return localUrl;
    } catch {
      return null;
    }
  }

  private getExt(contentType: string): string {
    const map: Record<string, string> = {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/webp': 'webp',
      'image/svg+xml': 'svg',
      'image/bmp': 'bmp',
    };
    return map[contentType] || 'jpg';
  }

  private async waitSlot(): Promise<void> {
    if (this.activeCount < this.maxConcurrent) {
      this.activeCount++;
      return;
    }
    return new Promise<void>((resolve) => {
      this.pending.push(() => {
        this.activeCount++;
        resolve();
      });
    });
  }

  private releaseSlot(): void {
    this.activeCount--;
    const next = this.pending.shift();
    if (next) setImmediate(next);
  }

  /**
   * 删除热点关联的图片文件
   * @param hotspot 热点对象（需含 imageUrl / localImageUrl / images 字段）
   */
  deleteHotspotImages(hotspot: {
    imageUrl?: string | null;
    localImageUrl?: string | null;
    images?: any;
  }): void {
    const urls = new Set<string>();

    if (hotspot.imageUrl) urls.add(hotspot.imageUrl);
    if (hotspot.localImageUrl) urls.add(hotspot.localImageUrl);
    if (hotspot.images) {
      try {
        const arr = typeof hotspot.images === 'string'
          ? JSON.parse(hotspot.images)
          : hotspot.images;
        if (Array.isArray(arr)) arr.forEach((u: string) => urls.add(u));
      } catch {
        // ignore parse errors
      }
    }

    let deleted = 0;
    for (const url of urls) {
      // url 格式如 /uploads/hotspot/1000_xxx.jpg
      const filename = path.basename(url);
      const filePath = path.join(this.uploadDir, filename);
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          deleted++;
        }
      } catch (err: any) {
        this.logger.warn(`删除热点图片失败: ${filePath} - ${err.message}`);
      }
    }
    if (deleted > 0) {
      this.logger.log(`已删除热点图片 ${deleted} 张`);
    }
  }

  /**
   * 批量删除热点图片
   */
  deleteHotspotImagesBatch(hotspots: Array<{ imageUrl?: string | null; localImageUrl?: string | null; images?: any }>): void {
    for (const h of hotspots) {
      this.deleteHotspotImages(h);
    }
  }
}
