import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsObject,
  IsOptional,
} from 'class-validator';
import { Expose } from 'class-transformer';
export class CardDto {
  @Expose()
  @IsOptional()
  @IsNumber()
  id?: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  value: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  type: string;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  x: number;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  y: number;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  w: number;

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  h: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  i: string;

  @Expose()
  @IsObject()
  config: Record<string, any>;

  @Expose()
  @IsObject()
  data: Record<string, any>;
}
