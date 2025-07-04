import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { EnumType } from '@prisma/client';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateEnumDto {
  @ApiProperty({ enum: EnumType })
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
  @IsBoolean()
  isAuthColumn?: boolean;

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
