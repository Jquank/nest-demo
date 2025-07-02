// src/import/import.controller.ts
import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { HouseService } from './house.service';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
  ApiResponse,
} from '@nestjs/swagger';
import { Express } from 'express';
import { Public } from '@/common/decorator/public.decorator';
import { PaginationDto } from '@/common/dto/pagination.dto';

@Controller('house')
@ApiTags('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post('import/tenants')
  @Public()
  @ApiOperation({ summary: '导入租户数据' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async importTenants(@UploadedFile() file: Express.Multer.File) {
    return this.houseService.importTenants(file.buffer);
  }

  @Post('tenants')
  @ApiResponse({ status: 200, description: '' })
  async getTenants(@Body() page: PaginationDto) {
    return this.houseService.getTenants(page);
  }
}
