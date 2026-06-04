import { Module } from '@nestjs/common';
import { HotspotController } from './hotspot.controller';
import { HotspotService } from './hotspot.service';
import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../common/service/ai.service';
import { AiImageModule } from '../ai-image/ai-image.module';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [AiImageModule, WalletModule],
  controllers: [HotspotController],
  providers: [HotspotService, PrismaService, AiService],
  exports: [HotspotService],
})
export class HotspotModule {}
