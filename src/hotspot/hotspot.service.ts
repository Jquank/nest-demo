import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../common/service/ai.service';
import { AiImageService } from '../ai-image/ai-image.service';
import { WalletService } from '../wallet/wallet.service';
import { ImageDownloadService } from './image-download.service';
import { CreateHotspotDto, UpdateHotspotDto } from './dto/hotspot.dto';
import { GenerateContentDto } from './dto/generate-content.dto';

@Injectable()
export class HotspotService {
  private readonly logger = new Logger(HotspotService.name);

  constructor(
    private prisma: PrismaService,
    private aiService: AiService,
    private aiImageService: AiImageService,
    private walletService: WalletService,
    private imageDownloadService: ImageDownloadService,
  ) {}

  // ======== 分类 ========
  async getCategories() {
    return this.prisma.category.findMany({ orderBy: { sortOrder: 'asc' } });
  }

  async getCategoryById(id: number) {
    return this.prisma.category.findUnique({ where: { id } });
  }

  // ======== 热点 ========
  async getHotspotsByDate(date?: string) {
    // 返回2天内的所有热点（按分类和热度排序）
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    const where: any = {
      createdAt: { gte: twoDaysAgo },
    };
    // 如果指定了日期，额外按 publishDate 过滤
    if (date) {
      const startOfDay = new Date(date + 'T00:00:00');
      const endOfDay = new Date(date + 'T23:59:59');
      where.publishDate = { gte: startOfDay, lte: endOfDay };
    }
    return this.prisma.hotspot.findMany({
      where,
      include: { category: true },
      orderBy: [{ categoryId: 'asc' }, { heatIndex: 'desc' }],
    });
  }

  async getHotspotById(id: number) {
    return this.prisma.hotspot.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async createHotspot(dto: CreateHotspotDto) {
    return this.prisma.hotspot.create({
      data: {
        ...dto,
        publishDate: dto.publishDate ? new Date(dto.publishDate) : new Date(),
      },
      include: { category: true },
    });
  }

  async updateHotspot(id: number, dto: UpdateHotspotDto) {
    return this.prisma.hotspot.update({
      where: { id },
      data: {
        ...dto,
        publishDate: dto.publishDate ? new Date(dto.publishDate) : undefined,
      },
      include: { category: true },
    });
  }

  async deleteHotspot(id: number) {
    // 先查出热点信息（含图片路径），再删除
    const hotspot = await this.prisma.hotspot.findUnique({
      where: { id },
      select: { imageUrl: true, localImageUrl: true, images: true },
    });
    if (hotspot) {
      this.imageDownloadService.deleteHotspotImages(hotspot);
    }
    return this.prisma.hotspot.delete({ where: { id } });
  }

  // ======== Admin: 批量刷新 — 覆盖当日数据 ========
  async refreshHotspots(date: string, hotspots: CreateHotspotDto[]) {
    const startOfDay = new Date(date + 'T00:00:00');
    const endOfDay = new Date(date + 'T23:59:59');

    // 先查出要删除的热点图片，再删记录
    const toDelete = await this.prisma.hotspot.findMany({
      where: { publishDate: { gte: startOfDay, lte: endOfDay } },
      select: { imageUrl: true, localImageUrl: true, images: true },
    });
    if (toDelete.length > 0) {
      this.imageDownloadService.deleteHotspotImagesBatch(toDelete);
    }

    await this.prisma.hotspot.deleteMany({
      where: { publishDate: { gte: startOfDay, lte: endOfDay } },
    });

    const created: any[] = [];
    for (const dto of hotspots) {
      const h = await this.prisma.hotspot.create({
        data: {
          ...dto,
          publishDate: dto.publishDate ? new Date(dto.publishDate) : new Date(),
        },
        include: { category: true },
      });
      created.push(h);
    }
    return { count: created.length, hotspots: created };
  }

  // ======== AI 内容生成 ========
  async generateContent(dto: GenerateContentDto) {
    const hotspots = await this.prisma.hotspot.findMany({
      where: { id: { in: dto.hotspotIds } },
      include: { category: true },
      orderBy: { heatIndex: 'desc' },
    });

    if (hotspots.length === 0) {
      throw new Error('未找到选中的热点');
    }

    // 第一步：抓取每篇热点的原文内容
    const articleMap = new Map<number, string>();
    for (const h of hotspots) {
      if (h.contentUrl) {
        try {
          const text = await this.fetchArticleText(h.contentUrl);
          if (text) {
            articleMap.set(h.id, text);
            this.logger.log(
              `Fetched article text for #${h.id}: ${text.length} chars`,
            );
          }
        } catch (err: any) {
          this.logger.warn(
            `Failed to fetch article for #${h.id}: ${err.message}`,
          );
        }
      }
    }

    const maxImages = dto.maxImages ?? 1;
    const imageModel = dto.imageModel || undefined;
    const wordRange = `${dto.minWords || 50}-${dto.maxWords || 300}`;

    // 构建热点素材（包含原文）
    const hotspotMaterials = hotspots
      .map((h, i) => {
        const articleText = articleMap.get(h.id);
        const articleBlock = articleText
          ? `\n📄 原文内容（核心参考，请仔细阅读后创作）：\n${articleText.substring(0, 2000)}${articleText.length > 2000 ? '...(原文过长已截断)' : ''}`
          : '\n⚠️ 未能获取原文，请基于标题和摘要创作，但不要编造原文没有的具体细节。';
        return (
          `[${i + 1}] ${h.title}\n摘要：${h.summary || '暂无'}\n来源：${h.source || '未知'}\n热度：${h.heatIndex}` +
          articleBlock
        );
      })
      .join('\n\n');

    const prompt =
      `你是一个爆款自媒体写手，擅长创作让读者停不下来的内容。基于以下${hotspots.length}条热点素材，撰写一篇${dto.targetFormat === '微头条' ? '微头条' : '今日头条文章'}。\n\n` +
      `🔥 核心创作铁律（违反一条即为不合格）：\n` +
      `1. 【原文是根基】必须紧扣提供的原文内容进行创作。原文中的关键数据、事件经过、人物言论，必须准确引用，不得歪曲。\n` +
      `2. 【拒绝标题式创作】严禁只看标题就自由发挥！如果原文已获取，文章的核心论据必须来自原文；如果某条热点未获取到原文，则不要编造该热点的具体细节，只做概括性提及。\n` +
      `3. 【允许联网级延伸】你可以在原文基础上，调用你的训练知识来补充背景信息、关联同类事件、进行横向对比、发表独立观点。比如：引用历史数据佐证趋势、类比其他行业案例、补充政策法规背景。这些"课外知识"能让文章更有深度，但绝不能替代原文事实。\n` +
      `4. 【观点与事实分离】引用原文事实时标注"据报道""据原文"，你自己的观点和分析要明确区分，让读者知道哪些是事实、哪些是你的解读。\n` +
      `5. 【拒绝标题党但要有钩子】标题和开头要有吸引力，但必须基于原文的真实冲突点/数据反差/争议焦点，禁止无中生有制造虚假爆点。\n` +
      `6. 【有信息增量】不要简单复述原文！读者看完原文标题就知道了，你的价值在于：分析为什么、还有什么影响、和什么有关、普通人该怎么办。\n\n` +
      `写作技巧：\n` +
      `- 文风：${dto.style}（${dto.style === '犀利' ? '一针见血、敢说真话、有独立判断' : dto.style === '活泼' ? '轻松幽默、网感十足、像朋友聊天' : '理性有料、逻辑清晰、但绝不枯燥'}）\n` +
      `- 字数：${wordRange}字，超出部分会被截断\n` +
      `- 开头黄金3秒：用原文中最劲爆/最反常/最扎心的细节切入，拒绝"近日""据了解""随着XX的发展"等官腔\n` +
      `- 中间段落：采用"原文事实→你的解读→延伸知识→再回到原文"的节奏，层层递进\n` +
      `- 善用「但是」「说白了」「更可怕的是」「你猜怎么着」「没想到吧」等口语化连接词\n` +
      `- 结尾：抛出1-2个开放式问题引导评论互动，让读者忍不住留言\n` +
      (maxImages > 0
        ? `- 文中插入 ${maxImages} 个 [配图：描述] 占位符，放在内容转折处或重点段落旁，描述要简短说明配图内容\n`
        : '') +
      `\n热点素材（这是你创作的唯一事实来源，请认真阅读每篇原文）：\n` +
      hotspotMaterials;

    this.logger.log(
      `Generating content for ${hotspots.length} hotspots, format=${dto.targetFormat}, ` +
        `${articleMap.size}/${hotspots.length} with article text`,
    );

    // 扣费：AI 成文（admin 账户）
    await this.walletService.consume(
      1,
      'hotspot-generate',
      undefined,
      'AI_HOTSPOT',
    );

    const result = await this.aiService.chat(
      [
        {
          role: 'system',
          content:
            `你是一个爆款${dto.targetFormat === '微头条' ? '微头条' : '今日头条文章'}写手。你的核心信条：\n` +
            `1. 原文事实是你的创作根基，绝不脱离原文编造\n` +
            `2. 但你可以调用训练知识进行"联网级延伸"——补充背景、关联事件、发表观点\n` +
            `3. 你的文字让人上瘾：观点鲜明、节奏紧凑、金句频出\n` +
            `4. 善用短句、留白、反问制造阅读快感\n` +
            `5. 拒绝平淡叙述，每句话都要有信息增量\n` +
            `6. 标题式创作（只看标题自由发挥）是严重错误，必须基于原文内容写作`,
        },
        { role: 'user', content: prompt },
      ],
      { temperature: 0.8, maxTokens: 4096 },
    );

    // 第二步：为每条热点生成 AI 配图（如果 maxImages > 0）
    const generatedImages: string[] = [];
    if (maxImages > 0) {
      this.logger.log(`开始生成 ${maxImages} 张 AI 配图...`);
      for (let i = 0; i < maxImages; i++) {
        // 用第i条热点的标题+摘要作为图片提示词
        const h = hotspots[i % hotspots.length];
        const imagePrompt =
          `新闻配图风格，无文字，主题：${h.title}。${h.summary || ''}`.substring(
            0,
            500,
          );
        try {
          const imageUrl = await this.aiImageService.generateImageUrl(
            imagePrompt,
            undefined,
            1,
            imageModel,
          );
          if (imageUrl) {
            generatedImages.push(imageUrl);
            this.logger.log(`AI 配图 ${i + 1}/${maxImages} 完成: ${imageUrl}`);
          }
        } catch (err: any) {
          this.logger.warn(`AI 配图 ${i + 1} 失败: ${err.message}`);
        }
        // 间隔避免限流
        if (i < maxImages - 1) {
          await new Promise((r) => setTimeout(r, 2000));
        }
      }
    }

    return {
      content: result.content,
      hotspots: hotspots.map((h) => ({
        id: h.id,
        title: h.title,
        category: h.category.name,
        localImageUrl: h.localImageUrl,
        contentUrl: h.contentUrl,
        source: h.source,
      })),
      generatedImages,
      config: {
        targetFormat: dto.targetFormat,
        style: dto.style,
        wordRange,
        maxImages,
        articleFetched: articleMap.size,
        totalHotspots: hotspots.length,
      },
    };
  }

  /** 从URL抓取文章正文文本 */
  private async fetchArticleText(url: string): Promise<string | null> {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        },
      });
      clearTimeout(timeout);

      if (!response.ok) return null;

      const html = await response.text();
      const text = this.extractMainText(html);
      if (!text || text.length < 30) return null;

      // 限制最大长度 3000 字符，避免 prompt 过长
      return text.substring(0, 3000);
    } catch {
      return null;
    }
  }

  /** 从 HTML 中提取正文文本（去除标签/脚本/样式/导航等） */
  private extractMainText(html: string): string {
    // 移除 script、style、nav、header、footer、aside 等非正文标签
    let cleaned = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
      .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, '')
      .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '')
      .replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '')
      .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '');

    // 移除所有 HTML 标签
    cleaned = cleaned.replace(/<[^>]+>/g, ' ');

    // 解码 HTML 实体
    cleaned = cleaned
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, '/')
      .replace(/&nbsp;/g, ' ')
      .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));

    // 合并多余空白
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    return cleaned;
  }

  // ======== AI 刷新单个分类 ========
  async refreshCategoryByAI(date: string, categoryId: number) {
    // 扣费
    await this.walletService.consume(
      1,
      'hotspot-refresh-single',
      undefined,
      'AI_HOTSPOT',
    );

    const cat = await this.prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!cat) throw new Error('分类不存在');

    const existingTitles = await this.prisma.hotspot.findMany({
      where: { categoryId },
      select: { title: true },
    });
    const existingTitleSet = new Set(existingTitles.map((h) => h.title.trim()));
    const existingTitleList = [...existingTitleSet].slice(0, 30);

    this.logger.log(`Refreshing category: ${cat.name}`);

    const prompt = this.buildCategoryPrompt(
      cat.name,
      date,
      5,
      existingTitleList,
    );
    const result = await this.aiService.chat(
      [
        {
          role: 'system',
          content:
            '你是一个专业的内容聚合助手。返回严格的JSON格式，不要包含markdown代码块标记。',
        },
        { role: 'user', content: prompt },
      ],
      { temperature: 0.85, maxTokens: 4096 },
    );

    const raw = result.content.replace(/```json|```/g, '').trim();
    let items: any[] = [];
    try {
      items = JSON.parse(raw);
      if (!Array.isArray(items)) items = [];
    } catch {
      const match = raw.match(/\[\s*\{[\s\S]*/);
      if (match) {
        try {
          items = JSON.parse(match[0].replace(/\}\s*$/, '}]'));
        } catch {}
      }
    }

    const dedupedItems = items.filter(
      (item) => item.title && !existingTitleSet.has(String(item.title).trim()),
    );

    let count = 0;
    for (const item of dedupedItems) {
      await this.prisma.hotspot.create({
        data: {
          title: item.title,
          summary: item.summary || null,
          source: item.source || null,
          region: item.region || null,
          heatIndex: item.heatIndex || 0,
          categoryId,
          publishDate: new Date(date + 'T00:00:00'),
        },
      });
      count++;
    }

    return { count, category: cat.name };
  }

  // ======== AI 聚合刷新热点（新增：追加模式 + 去重 + 2天过期 + AI生图） ========
  async refreshHotspotsByAI(date: string) {
    // 扣费：AI 刷新热点（admin 账户）
    await this.walletService.consume(
      1,
      'hotspot-refresh',
      undefined,
      'AI_HOTSPOT',
    );

    // 0. 先清理超过2天的过期热点（含图片文件）
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
    const expiredHotspots = await this.prisma.hotspot.findMany({
      where: { createdAt: { lt: twoDaysAgo } },
      select: { imageUrl: true, localImageUrl: true, images: true },
    });
    if (expiredHotspots.length > 0) {
      this.imageDownloadService.deleteHotspotImagesBatch(expiredHotspots);
    }
    const deletedExpired = await this.prisma.hotspot.deleteMany({
      where: { createdAt: { lt: twoDaysAgo } },
    });
    if (deletedExpired.count > 0) {
      this.logger.log(`已清理 ${deletedExpired.count} 条过期热点（>2天），图片已同步删除`);
    }

    const categories = await this.getCategories();
    const allItems: any[] = [];
    const perCategoryLimit = 5; // 每个分类抓取5条

    // 第一步：从所有分类收集数据
    for (const cat of categories) {
      // 获取该分类下已有的标题（用于去重）
      const existingTitles = await this.prisma.hotspot.findMany({
        where: { categoryId: cat.id },
        select: { title: true },
      });
      const existingTitleSet = new Set(
        existingTitles.map((h) => h.title.trim()),
      );
      const existingTitleList = [...existingTitleSet].slice(0, 30); // 最多传30条避免prompt过长

      this.logger.log(
        `Fetching hot topics for category: ${cat.name} (已有 ${existingTitleSet.size} 条，需去重)`,
      );

      try {
        const prompt = this.buildCategoryPrompt(
          cat.name,
          date,
          perCategoryLimit,
          existingTitleList,
        );

        const result = await this.aiService.chat(
          [
            {
              role: 'system',
              content:
                '你是一个专业的内容聚合助手，善于发现真正有话题性和吸引力的内容。请返回严格的JSON格式数据，不要包含markdown代码块标记。',
            },
            { role: 'user', content: prompt },
          ],
          { temperature: 0.85, maxTokens: 4096 },
        );

        const raw = result.content;
        this.logger.log(
          `AI raw response length for ${cat.name}: ${raw.length} chars`,
        );

        // 解析AI返回的JSON（增强容错）
        let items: any[] = [];
        try {
          const cleaned = raw.replace(/```json|```/g, '').trim();
          items = JSON.parse(cleaned);
          if (!Array.isArray(items)) throw new Error('Not an array');
        } catch (e1: any) {
          this.logger.warn(
            `JSON parse failed for ${cat.name}: ${e1.message}, trying repair...`,
          );
          const match = raw.match(/\[\s*\{[\s\S]*/);
          if (match) {
            let fragment = match[0];
            const lastComplete = fragment.lastIndexOf('"}');
            if (lastComplete > 0) {
              fragment = fragment.substring(0, lastComplete + 2) + ']';
              try {
                items = JSON.parse(fragment);
                if (!Array.isArray(items)) items = [];
              } catch {
                items = this.extractJsonObjects(fragment);
              }
            } else {
              items = this.extractJsonObjects(fragment);
            }
          }
        }

        if (items.length === 0) {
          this.logger.warn(
            `⚠️ Category "${cat.name}" returned 0 items after parsing`,
          );
        } else {
          // 客户端再次去重（过滤掉标题已存在于库中的条目）
          const dedupedItems = items.filter(
            (item) =>
              item.title && !existingTitleSet.has(String(item.title).trim()),
          );
          const skipped = items.length - dedupedItems.length;
          if (skipped > 0) {
            this.logger.log(`Category "${cat.name}": ${skipped} 条重复已跳过`);
          }
          this.logger.log(
            `Category "${cat.name}": ${dedupedItems.length} 条新热点`,
          );

          for (const item of dedupedItems.slice(0, perCategoryLimit)) {
            allItems.push({ item, catId: cat.id });
          }
        }
      } catch (err: any) {
        this.logger.error(
          `Failed to fetch category "${cat.name}": ${err.message}`,
        );
      }
    }

    if (allItems.length === 0) {
      throw new Error(
        '所有分类均未返回新数据（可能已无更多热点或全部重复），请稍后重试',
      );
    }

    // 第二步：追加写入数据库（不删除已有数据）
    const allCreated: any[] = [];
    for (const { item, catId } of allItems) {
      const h = await this.prisma.hotspot.create({
        data: {
          title: item.title || '未知标题',
          summary: item.summary || null,
          source: item.source || null,
          region: item.region || null,
          heatIndex: item.heatIndex || 50,
          contentUrl: item.contentUrl || null,
          publishDate: new Date(date + 'T00:00:00'),
          categoryId: catId,
        },
        include: { category: true },
      });
      allCreated.push(h);
    }

    this.logger.log(`共入库 ${allCreated.length} 条新热点`);

    // 第三步：异步为每条新热点生成 AI 配图
    this.generateImagesForHotspots(allCreated).catch((err) => {
      this.logger.warn(`后台 AI 生图任务失败: ${err.message}`);
    });

    return { count: allCreated.length, hotspots: allCreated };
  }

  /** 为热点列表异步生成 AI 配图 */
  private async generateImagesForHotspots(hotspots: any[]): Promise<void> {
    for (const h of hotspots) {
      try {
        const imagePrompt =
          `新闻配图风格，主题：${h.title}。${h.summary || ''}`.substring(
            0,
            500,
          );
        const imageUrl = await this.aiImageService.generateImageUrl(
          imagePrompt,
          undefined,
          1,
        );
        if (imageUrl) {
          await this.prisma.hotspot.update({
            where: { id: h.id },
            data: { localImageUrl: imageUrl },
          });
          this.logger.log(`热点 #${h.id} AI 配图已生成: ${imageUrl}`);
        }
        // 每个图之间间隔3秒，避免API限流
        await new Promise((r) => setTimeout(r, 3000));
      } catch (err: any) {
        this.logger.warn(`热点 #${h.id} AI 生图失败: ${err.message}`);
      }
    }
  }

  /** 按分类构建差异化提示词，注重话题吸引力 */
  private buildCategoryPrompt(
    categoryName: string,
    date: string,
    limit: number,
    existingTitles: string[] = [],
  ): string {
    const baseFormat =
      `返回严格JSON数组（不含markdown代码块），每条必含：\n` +
      `- title: 标题（中文，有冲击力，15-25字）\n` +
      `- summary: 1-2句摘要（突出争议/反差/实用价值）\n` +
      `- source: 来源媒体/网站名\n` +
      `- region: "国内" 或 "国外"\n` +
      `- heatIndex: 热度1-100\n` +
      `- contentUrl: 原文真实链接（必须可访问）\n` +
      `按热度和话题性降序，只返回${limit}条。`;

    // 去重提示
    const dedupHint =
      existingTitles.length > 0
        ? `\n🚫 以下标题已存在，请避开这些话题，找不一样的：\n${existingTitles.map((t) => `- ${t}`).join('\n')}\n`
        : '';

    switch (categoryName) {
      case '娱乐':
        return (
          `请搜索今天（${date}）娱乐八卦领域讨论度最高的${limit}条话题。\n\n` +
          `优先：争议事件、反转剧情、热门综艺/剧集名场面、明星争议言论。\n` +
          `要求话题有吸引力、让人忍不住点进去看。\n\n` +
          dedupHint +
          baseFormat
        );

      case '科技AI':
        return (
          `请搜索今天（${date}）科技与AI领域最值得关注的${limit}条内容。\n\n` +
          `📌 内容方向：\n` +
          `- AI行业劲爆新闻：大模型发布、AI应用突破、行业争议、大佬观点\n` +
          `- 科技数码猛料：手机/电脑/智能硬件新品、大厂动态、产品翻车\n` +
          `- 普通人也看得懂的AI科普、效率工具推荐、实用技巧\n` +
          `- 科技圈热点话题、病毒式传播的科技趣闻\n` +
          `⚡ 标题要有冲击力和话题性，让人忍不住转发。\n\n` +
          dedupHint +
          baseFormat
        );

      case '情感':
        return (
          `请搜索今天（${date}）情感生活领域最有共鸣的${limit}条话题。\n\n` +
          `优先：两性关系讨论、家庭矛盾、婚恋话题、心理健康、人际交往困惑、治愈系故事。\n` +
          `要求话题能引发普通人的情感共鸣和讨论欲。\n\n` +
          dedupHint +
          baseFormat
        );

      case '社会':
        return (
          `请搜索今天（${date}）社会民生领域最受关注的${limit}条话题。\n\n` +
          `优先：争议性社会事件、引发广泛讨论的民生话题、奇闻异事、暖心正能量故事。\n` +
          `要求有公共讨论价值，能引发读者思考或讨论。\n\n` +
          dedupHint +
          baseFormat
        );

      default:
        return (
          `请搜索今天（${date}）"${categoryName}"领域最具话题吸引力的${limit}条内容。\n\n` +
          dedupHint +
          baseFormat
        );
    }
  }

  /** 从截断的JSON片段中逐个提取对象（容错用） */
  private extractJsonObjects(fragment: string): any[] {
    const objects: any[] = [];
    const objRegex = /\{[^{}]*\}/g;
    let match;
    while ((match = objRegex.exec(fragment)) !== null) {
      try {
        const obj = JSON.parse(match[0]);
        if (obj.title) objects.push(obj);
      } catch {
        // skip malformed
      }
    }
    return objects;
  }
}
