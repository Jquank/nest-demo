import { IsNotEmpty, IsNumber } from 'class-validator';
export class PaginationDto {
  @IsNotEmpty()
  @IsNumber()
  currentPage: number;

  @IsNotEmpty()
  @IsNumber()
  pageSize: number;
}
