import { Module } from '@nestjs/common';
import { AiImageController } from './ai-image.controller';
import { AiImageService } from './ai-image.service';
import { PrismaService } from '@/prisma/prisma.service';
import { AiService } from '@/common/service/ai.service';
import { WalletModule } from '@/wallet/wallet.module';

@Module({
  imports: [WalletModule],
  controllers: [AiImageController],
  providers: [AiImageService, AiService, PrismaService],
  exports: [AiImageService],
})
export class AiImageModule {}
