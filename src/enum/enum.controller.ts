import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  ParseIntPipe,
  Param,
  Query,
  Req,
} from '@nestjs/common';
import { EnumService } from './enum.service';
import {
  CreateEnumDto,
  UpdateEnumDto,
  CreateEnumItemsDto,
  UpdateEnumItemDto,
} from './dto/enum.dto';
import { Public } from '@/common/decorator/public.decorator';
import { ApiOperation, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { PaginationDto } from '@/common/dto/pagination.dto';
import { Request } from 'express';
import { User } from '@prisma/client';

interface IRequest extends Request {
  user: User;
}

@Controller('enum')
@ApiTags('enum')
export class EnumController {
  constructor(private readonly enumService: EnumService) {}

  @Post()
  @Public()
  @ApiOperation({ summary: '新增枚举' })
  createEnum(@Body() createEnumDto: CreateEnumDto) {
    return this.enumService.createEnum(createEnumDto);
  }

  @Get()
  @Public()
  @ApiOperation({ summary: '分页查询枚举' })
  @ApiResponse({ status: 200, description: '' })
  getEnumsList(@Body() page: PaginationDto) {
    return this.enumService.getEnumsList(page);
  }

  @Get('items')
  @Public()
  @ApiOperation({ summary: '查询单个枚举的枚举项' })
  @ApiResponse({ status: 200, description: '' })
  getEnumItemsByCode(@Query('code') code: string, @Req() req: IRequest) {
    return this.enumService.getEnumItemsByCode(code, req.user);
  }

  @Put(':id')
  @Public()
  @ApiOperation({ summary: '修改枚举' })
  updateEnum(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEnumDto: UpdateEnumDto,
  ) {
    return this.enumService.updateEnum(id, updateEnumDto);
  }

  @Post('items/:id')
  @Public()
  @ApiOperation({ summary: '新增枚举项' })
  @ApiBody({
    type: CreateEnumItemsDto,
    isArray: true,
  })
  createEnumItems(
    @Param('id', ParseIntPipe) id: number,
    @Body() createEnumItems: CreateEnumItemsDto[],
  ) {
    return this.enumService.createEnumItems(id, createEnumItems);
  }

  @Put('items/:id')
  @Public()
  @ApiOperation({ summary: '修改枚举项' })
  updateEnumItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEnumItemDto: UpdateEnumItemDto,
  ) {
    return this.enumService.updateEnumItem(id, updateEnumItemDto);
  }
}
