import {
  Injectable,
  Logger,
  BadRequestException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { PRICING, PRICING_LABELS } from './wallet.constants';

@Injectable()
export class WalletService implements OnModuleInit {
  private readonly logger = new Logger(WalletService.name);

  constructor(private prisma: PrismaService) {}

  /** 启动时确保所有已有用户都有钱包 */
  async onModuleInit() {
    const users = await this.prisma.user.findMany({
      where: { wallet: null },
      select: { id: true },
    });
    for (const u of users) {
      await this.prisma.wallet.create({ data: { userId: u.id } });
    }
    if (users.length > 0) {
      this.logger.log(`为 ${users.length} 个用户创建了钱包`);
    }
  }

  /** 获取或创建用户钱包 */
  async getWallet(userId: number) {
    let wallet = await this.prisma.wallet.findUnique({ where: { userId } });
    if (!wallet) {
      wallet = await this.prisma.wallet.create({ data: { userId } });
    }
    return wallet;
  }

  /**
   * 管理员充值
   * @returns 充值后的钱包信息
   */
  async recharge(
    adminUserId: number,
    targetUserId: number,
    amountInFen: number,
    description?: string,
  ) {
    if (amountInFen <= 0) throw new BadRequestException('充值金额必须大于0');

    const wallet = await this.getWallet(targetUserId);

    // 乐观锁更新
    const updated = await this.prisma.wallet.update({
      where: { userId: targetUserId, version: wallet.version },
      data: {
        balance: { increment: amountInFen },
        totalRecharged: { increment: amountInFen },
        version: { increment: 1 },
      },
    });

    if (!updated) throw new BadRequestException('充值失败，请重试');

    // 记录流水
    await this.prisma.transaction.create({
      data: {
        userId: targetUserId,
        type: 'RECHARGE',
        amount: amountInFen,
        balanceBefore: wallet.balance,
        balanceAfter: updated.balance,
        relatedType: 'ADMIN_RECHARGE',
        description: description || `管理员 #${adminUserId} 充值`,
      },
    });

    this.logger.log(
      `充值成功: userId=${targetUserId} amount=${amountInFen}分 balance=${updated.balance}分`,
    );
    return updated;
  }

  /**
   * 消费扣款（带乐观锁重试）
   * @returns 扣款后的钱包信息
   */
  async consume(
    userId: number,
    pricingKey: string,
    relatedId?: number,
    relatedType = 'AI_IMAGE',
  ): Promise<{ wallet: any; amount: number }> {
    const price = PRICING[pricingKey];
    if (!price) throw new BadRequestException(`不支持的计费项: ${pricingKey}`);

    const maxRetries = 3;
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const wallet = await this.prisma.wallet.findUnique({
        where: { userId },
      });
      if (!wallet) throw new BadRequestException('钱包不存在');

      if (wallet.balance < price) {
        throw new BadRequestException(
          `余额不足！需要 ${price} 分，当前余额 ${wallet.balance} 分`,
        );
      }

      try {
        const updated = await this.prisma.wallet.update({
          where: { userId, version: wallet.version },
          data: {
            balance: { decrement: price },
            totalConsumed: { increment: price },
            version: { increment: 1 },
          },
        });

        await this.prisma.transaction.create({
          data: {
            userId,
            type: 'CONSUME',
            amount: -price,
            balanceBefore: wallet.balance,
            balanceAfter: updated.balance,
            relatedType,
            relatedId,
            description: PRICING_LABELS[pricingKey] || pricingKey,
          },
        });

        return { wallet: updated, amount: price };
      } catch {
        if (attempt < maxRetries - 1) {
          continue;
        }
        throw new BadRequestException('扣款失败，请重试');
      }
    }
    throw new BadRequestException('扣款失败');
  }

  /**
   * 退款（AI生图失败时调用）
   */
  async refund(userId: number, amountInFen: number, reason?: string) {
    const wallet = await this.prisma.wallet.findUnique({ where: { userId } });
    if (!wallet) return;

    const updated = await this.prisma.wallet.update({
      where: { userId, version: wallet.version },
      data: {
        balance: { increment: amountInFen },
        totalConsumed: { decrement: amountInFen },
        version: { increment: 1 },
      },
    });

    await this.prisma.transaction.create({
      data: {
        userId,
        type: 'REFUND',
        amount: amountInFen,
        balanceBefore: wallet.balance,
        balanceAfter: updated.balance,
        relatedType: 'AI_IMAGE',
        description: reason || 'AI生图失败退款',
      },
    });
  }

  /** 分页查询交易流水 */
  async getTransactions(
    page = 1,
    pageSize = 20,
    userId?: number,
    type?: string,
  ) {
    const where: any = {};
    if (userId) where.userId = userId;
    if (type) where.type = type;

    const [records, total] = await Promise.all([
      this.prisma.transaction.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          user: { select: { id: true, username: true, name: true } },
        },
      }),
      this.prisma.transaction.count({ where }),
    ]);
    return { records, total, page, pageSize };
  }
}
