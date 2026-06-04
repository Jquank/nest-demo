import {
  IsNotEmpty,
  IsArray,
  IsString,
  IsOptional,
  IsInt,
  ArrayMinSize,
} from 'class-validator';

export class GenerateContentDto {
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  hotspotIds: number[];

  @IsNotEmpty()
  @IsString()
  targetFormat: string; // 微头条 | 文章

  @IsNotEmpty()
  @IsString()
  style: string; // 正式 | 活泼 | 犀利

  @IsOptional()
  @IsInt()
  minWords?: number;

  @IsOptional()
  @IsInt()
  maxWords?: number;

  @IsOptional()
  @IsInt()
  maxImages?: number;

  @IsOptional()
  @IsString()
  imageModel?: string;
}

export class RefreshHotspotsDto {
  @IsNotEmpty()
  @IsString()
  date: string;
}
