import { IsNotEmpty, IsString, IsNumber, IsJSON } from 'class-validator';
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

  @IsJSON()
  posi: string;

  @IsJSON()
  config: string;

  @IsJSON()
  data: string;
}
