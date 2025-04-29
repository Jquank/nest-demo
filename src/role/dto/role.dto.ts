import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
} from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  desc: string;
}

export class DeleteRoleDto {
  @IsNotEmpty()
  ids: number[];
}

export class BindUserDto {
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @IsArray()
  userIds: number[];
}

export class BindPermissionDto {
  @IsNotEmpty()
  @IsNumber()
  roleId: number;

  @IsNotEmpty()
  @IsArray()
  permissions: string[];
}

export class FindRoleDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  desc?: string;
}
