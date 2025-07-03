import {
  Controller,
  Body,
  Post,
  Put,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { EnumService } from './enum.service';
import {
  CreateEnumDto,
  UpdateEnumDto,
  CreateEnumItemsDto,
  UpdateEnumItemDto,
} from './dto/enum.dto';
import { Public } from '@/common/decorator/public.decorator';
import { ApiOperation, ApiTags, ApiBody } from '@nestjs/swagger';

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

  @Post('items/:id')
  @Public()
  @ApiOperation({ summary: '新增枚举项' })
  @ApiBody({
    type: CreateEnumItemsDto,
    isArray: true,
  })
  createEnumItems(
    @Param('id', ParseIntPipe) id: number,
    @Body() createEnumItemsDto: CreateEnumItemsDto[],
  ) {
    return this.enumService.createEnumItems(id, createEnumItemsDto);
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
