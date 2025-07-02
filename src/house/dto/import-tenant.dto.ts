import { IsOptional, IsString } from 'class-validator';

export class ImportTenantDto {
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  idCardNumber?: string;

  @IsOptional()
  @IsString()
  tel?: string;
}
