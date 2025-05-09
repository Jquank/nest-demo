// import { PartialType } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';
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
  cards?: CardDto[];
}
