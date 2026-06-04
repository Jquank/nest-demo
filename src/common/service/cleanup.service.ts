import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '@/prisma/prisma.service';
import { unlinkSync, existsSync } from 'fs';

/**
 * 定时清理服务
 * - AI 生图：超过 3 天自动删除图片文件和数据库记录
 * - 每天凌晨 3:00 执行一次
 * - 应用启动时也执行一次
 */
@Injectable()
export class CleanupService {
  private readonly logger = new Logger(CleanupService.name);
  private readonly AI_IMAGE_RETENTION_DAYS = 3;

  constructor(private prisma: PrismaService) {
    // 构造函数中启动后立即执行一次
    this.cleanupAiImages().catch((err) =>
      this.logger.error(`启动时 AI 图片清理失败: ${err.message}`),
    );
  }

  /**
   * 每天凌晨 3:00 定时清理
   */
  @Cron(CronExpression.EVERY_DAY_AT_3AM)
  async cleanupAiImages(): Promise<number> {
    const cutoff = new Date(
      Date.now() - this.AI_IMAGE_RETENTION_DAYS * 24 * 60 * 60 * 1000,
    );

    // 查询过期记录（分批处理避免一次性加载太多）
    const batchSize = 100;
    let totalDeleted = 0;

    while (true) {
      const records = await this.prisma.aiImageRecord.findMany({
        where: { createdAt: { lt: cutoff } },
        select: { id: true, localPath: true },
        take: batchSize,
      });

      if (records.length === 0) break;

      // 删除本地文件
      for (const r of records) {
        try {
          if (r.localPath && existsSync(r.localPath)) {
            unlinkSync(r.localPath);
          }
        } catch (err: any) {
          this.logger.warn(
            `删除 AI 图片文件失败: ${r.localPath} - ${err.message}`,
          );
        }
      }

      // 批量删除数据库记录
      const ids = records.map((r) => r.id);
      await this.prisma.aiImageRecord.deleteMany({
        where: { id: { in: ids } },
      });

      totalDeleted += records.length;
      this.logger.log(
        `AI 图片清理批次完成: ${records.length} 张 (累计 ${totalDeleted})`,
      );
    }

    if (totalDeleted > 0) {
      this.logger.log(
        `🧹 AI 生图清理完成: 共删除 ${totalDeleted} 条超过 ${this.AI_IMAGE_RETENTION_DAYS} 天的记录`,
      );
    }

    return totalDeleted;
  }
}
