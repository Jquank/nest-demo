import { Injectable, HttpException } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { compare as bcryptCompare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(createUserDto: CreateUserDto) {
    const user = await this.userService.findOneByUsername(
      createUserDto.username,
      true,
    );
    if (!user) throw new HttpException('用户名不存在', 400);
    const isPasswordValid = await bcryptCompare(
      createUserDto.password,
      user.password || '',
    );
    if (!isPasswordValid) {
      throw new HttpException('密码错误', 400);
    }
    const payload = { sub: user.id, username: user.username };
    return {
      ...{ ...user, password: undefined },
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
