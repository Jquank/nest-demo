import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
export class CardDto {
  @IsNotEmpty()
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  value: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  posi: string;

  @IsNotEmpty()
  @IsString()
  config: string;

  @IsNotEmpty()
  @IsString()
  data: string;
}
