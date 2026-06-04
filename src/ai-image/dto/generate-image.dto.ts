import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsBoolean,
  IsArray,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GenerateImageDto {
  @ApiPropertyOptional({ description: '模型ID' })
  @IsInt()
  modelId: number;

  @ApiPropertyOptional({ description: '提示词ID（可选，使用已保存的模板）' })
  @IsOptional()
  @IsInt()
  promptId?: number;

  @ApiPropertyOptional({
    description: '自定义提示词/创意（与promptId二选一），限制不超过2048字符',
  })
  @IsOptional()
  @IsString()
  prompt?: string;

  @ApiPropertyOptional({ description: '图片尺寸，如 1376x768' })
  @IsOptional()
  @IsString()
  size?: string;

  @ApiPropertyOptional({ description: '生成数量，默认1' })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(4)
  n?: number;

  @ApiPropertyOptional({ description: '是否添加水印，默认false' })
  @IsOptional()
  @IsBoolean()
  watermark?: boolean;

  @ApiPropertyOptional({
    description: '参考图片URL列表（仅GPT-Image-2模型支持图片编辑）',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];

  @ApiPropertyOptional({
    description: '分辨率等级（1K/2K/4K），仅Nano Banana模型使用',
  })
  @IsOptional()
  @IsString()
  imageSize?: string;
}

export class CreateModelDto {
  @IsString()
  name: string;

  @IsString()
  displayName: string;

  @IsString()
  apiUrl: string;

  @IsOptional()
  @IsString()
  defaultSize?: string;
}

export class UpdateModelDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsString()
  apiUrl?: string;

  @IsOptional()
  @IsString()
  defaultSize?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class CreatePromptDto {
  @IsString()
  name: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsInt()
  modelId?: number;
}

export class UpdatePromptDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsInt()
  modelId?: number;
}
