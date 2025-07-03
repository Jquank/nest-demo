import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { EnumType } from '@prisma/client';
import { PartialType } from '@nestjs/swagger';
export class CreateEnumDto {
  @IsEnum(EnumType)
  type: EnumType;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  desc?: string;

  @IsOptional()
  @IsBoolean()
  enable?: boolean;
}

export class UpdateEnumDto extends PartialType(CreateEnumDto) {}

export class CreateEnumItemsDto {
  @IsNotEmpty()
  @IsString()
  value: string;

  @IsNotEmpty()
  @IsString()
  label: string;

  @IsOptional()
  @IsString()
  enLabel?: string;

  @IsOptional()
  @IsString()
  desc?: string;

  @IsOptional()
  @IsBoolean()
  enable?: boolean;
}

export class UpdateEnumItemDto extends PartialType(CreateEnumItemsDto) {}
