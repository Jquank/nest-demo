// import { PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CardDto } from './card.dto';
export class BoardDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  desc: string;
}

export class CreateBoardDto extends BoardDto {}
export class UpdateBoardDto extends BoardDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true }) // 校验数组中的每个对象
  @Type(() => CardDto) // 类型转换
  cards?: CardDto[];
}
