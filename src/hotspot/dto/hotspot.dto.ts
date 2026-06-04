import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  IsDateString,
} from 'class-validator';

export class CreateHotspotDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsInt()
  heatIndex?: number;

  @IsOptional()
  @IsDateString()
  publishDate?: string;

  @IsNotEmpty()
  @IsInt()
  categoryId: number;
}

export class UpdateHotspotDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsInt()
  heatIndex?: number;

  @IsOptional()
  @IsDateString()
  publishDate?: string;

  @IsOptional()
  @IsInt()
  categoryId?: number;
}
