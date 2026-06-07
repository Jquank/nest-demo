import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '@/prisma/prisma.service';
import { HotspotService } from '@/hotspot/hotspot.service';
import { unlinkSync, existsSync } from 'fs';

/**
 * 定时清理服务
 * - AI 生图：超过 3 天自动删除图片文件和数据库记录
 * - 热点：每天早上 8:00 自动刷新今日热点
 * - 每天凌晨 3:00 执行清理
 * - 应用启动时也执行一次
 */
@Injectable()
export class CleanupService {
  private readonly logger = new Logger(CleanupService.name);
  private readonly AI_IMAGE_RETENTION_DAYS = 3;

  constructor(
    private prisma: PrismaService,
    private hotspotService: HotspotService,
  ) {
    // 启动后立即执行一次
    this.cleanupAiImages().catch((err) =>
      this.logger.error(`启动时 AI 图片清理失败: ${err.message}`),
    );
  }

  /** 每天凌晨 3:00 清理过期 AI 图片 */
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async cleanupAiImages(): Promise<number> {
    const cutoff = new Date(
      Date.now() - this.AI_IMAGE_RETENTION_DAYS * 24 * 60 * 60 * 1000,
    );
    const batchSize = 100;
    let totalDeleted = 0;

    while (true) {
      const records = await this.prisma.aiImageRecord.findMany({
        where: { createdAt: { lt: cutoff } },
        select: { id: true, localPath: true },
        take: batchSize,
      });
      if (records.length === 0) break;

      for (const r of records) {
        try {
          if (r.localPath && existsSync(r.localPath)) {
            unlinkSync(r.localPath);
          }
        } catch (err: any) {
          this.logger.warn(`删除 AI 图片文件失败: ${r.localPath} - ${err.message}`);
        }
      }
      const ids = records.map((r) => r.id);
      await this.prisma.aiImageRecord.deleteMany({ where: { id: { in: ids } } });
      totalDeleted += records.length;
    }

    if (totalDeleted > 0) {
      this.logger.log(`🧹 AI 生图清理完成: 共删除 ${totalDeleted} 条超过 ${this.AI_IMAGE_RETENTION_DAYS} 天的记录`);
    }
    return totalDeleted;
  }

  /** 每天早上 8:00 自动刷新今日热点 */
  @Cron('0 0 8 * * *')
  async refreshHotspotsDaily(): Promise<void> {
    const today = new Date().toISOString().slice(0, 10);
    this.logger.log(`🔄 开始自动刷新今日热点: ${today}`);
    try {
      const result = await this.hotspotService.refreshHotspotsByAI(today);
      this.logger.log(`✅ 热点刷新完成: 共入库 ${result.count} 条`);
    } catch (err: any) {
      this.logger.error(`❌ 热点自动刷新失败: ${err.message}`);
    }
  }
}
