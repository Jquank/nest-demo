import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { PrismaService } from '../prisma/prisma.service';
import { ExcelParserService } from '@/common/service/excel-parser.service';

@Module({
  controllers: [HouseController],
  providers: [HouseService, PrismaService, ExcelParserService],
})
export class HouseModule {}
