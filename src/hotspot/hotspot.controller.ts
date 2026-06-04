import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { HotspotService } from './hotspot.service';
import { CreateHotspotDto, UpdateHotspotDto } from './dto/hotspot.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Public } from '../common/decorator/public.decorator';
import {
  GenerateContentDto,
  RefreshHotspotsDto,
} from './dto/generate-content.dto';

interface IRequest extends Request {
  user: { id: number; username: string; roles?: string[] };
}

@Controller('hotspot')
@ApiTags('hotspot')
export class HotspotController {
  constructor(private readonly hotspotService: HotspotService) {}

  @Public()
  @Get('categories')
  getCategories() {
    return this.hotspotService.getCategories();
  }

  @Public()
  @Get()
  getHotspots(@Query('date') date?: string) {
    return this.hotspotService.getHotspotsByDate(date);
  }

  @Public()
  @Get(':id')
  getHotspotById(@Param('id', ParseIntPipe) id: number) {
    return this.hotspotService.getHotspotById(id);
  }

  @Post()
  createHotspot(@Body() dto: CreateHotspotDto) {
    return this.hotspotService.createHotspot(dto);
  }

  @Put(':id')
  updateHotspot(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateHotspotDto,
  ) {
    return this.hotspotService.updateHotspot(id, dto);
  }

  @Delete(':id')
  deleteHotspot(@Param('id', ParseIntPipe) id: number) {
    return this.hotspotService.deleteHotspot(id);
  }

  // Admin: AI 聚合后批量写入
  @Post('refresh')
  refreshHotspots(
    @Body('date') date: string,
    @Body('hotspots') hotspots: CreateHotspotDto[],
  ) {
    return this.hotspotService.refreshHotspots(
      date || new Date().toISOString().slice(0, 10),
      hotspots,
    );
  }

  // AI 生成图文内容
  @Post('generate')
  generateContent(@Body() dto: GenerateContentDto) {
    return this.hotspotService.generateContent(dto);
  }

  // AI 聚合刷新今日热点
  @Post('refresh-ai')
  refreshByAI(@Body() dto: RefreshHotspotsDto) {
    return this.hotspotService.refreshHotspotsByAI(dto.date);
  }

  // AI 刷新单个分类
  @Post('refresh-category-ai')
  refreshCategoryByAI(@Body() dto: { date: string; categoryId: number }) {
    return this.hotspotService.refreshCategoryByAI(dto.date, dto.categoryId);
  }
}
