import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  IsArray,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

/** 登录（只校验非空，不校验密码复杂度） */
export class LoginDto {
  @IsNotEmpty({ message: '请输入用户名' })
  @IsString()
  username: string;

  @IsNotEmpty({ message: '请输入密码' })
  @IsString()
  password: string;
}

/** 注册（严格校验） */
export class CreateUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须是字符串' })
  @MaxLength(15, { message: '用户名不能超过15个字符' })
  username: string;

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '密码必须是字符串' })
  @MinLength(6, { message: '密码至少需要6位' })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)/, {
    message: '密码必须同时包含字母和数字',
  })
  password: string;

  @IsOptional()
  @IsString()
  name?: string;
}

/** 管理端创建用户（密码可选，不填则随机生成） */
export class AdminCreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  roleIds?: number[];
}
