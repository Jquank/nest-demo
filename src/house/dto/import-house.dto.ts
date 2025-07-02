import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  HouseType,
  PriceUnit,
  AreaUnit,
  Direction,
  HouseStatus,
} from '@prisma/client';

export class ImportHouseDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(HouseType)
  type: HouseType;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  district?: string;

  @IsNumber()
  price: number;

  @IsEnum(PriceUnit)
  priceUnit: PriceUnit;

  @IsOptional()
  @IsNumber()
  deposit?: number;

  @IsOptional()
  @IsNumber()
  area?: number;

  @IsOptional()
  @IsEnum(AreaUnit)
  areaUnit?: AreaUnit;

  @IsOptional()
  @IsNumber()
  bedrooms?: number;

  @IsOptional()
  @IsNumber()
  livingRooms?: number;

  @IsOptional()
  @IsNumber()
  bathrooms?: number;

  @IsOptional()
  @IsEnum(Direction)
  orientation?: Direction;

  @IsOptional()
  @IsEnum(HouseStatus)
  status?: HouseStatus;
}
