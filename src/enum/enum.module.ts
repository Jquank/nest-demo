import { Module } from '@nestjs/common';
import { EnumService } from './enum.service';
import { EnumController } from './enum.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [EnumController],
  providers: [EnumService, PrismaService],
})
export class EnumModule {}
