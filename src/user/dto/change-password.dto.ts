import { IsNotEmpty, IsString, MinLength, Matches } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty({ message: '请输入旧密码' })
  @IsString()
  oldPassword: string;

  @IsNotEmpty({ message: '请输入新密码' })
  @IsString()
  @MinLength(6, { message: '新密码至少需要6位' })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)/, {
    message: '新密码必须同时包含字母和数字',
  })
  newPassword: string;
}
