import { Injectable, HttpException } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from '@/user/dto/create-user.dto';
import { compare as bcryptCompare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.userService.findOneByUsername(
      dto.username,
      true,
    );
    if (!user) throw new HttpException('用户名不存在', 400);
    const isPasswordValid = await bcryptCompare(
      dto.password,
      user.password || '',
    );
    if (!isPasswordValid) {
      throw new HttpException('密码错误', 401);
    }

    // 获取完整用户信息（含角色），用于 JWT payload 和前端路由守卫
    const fullUser = await this.userService.getUserById(user.id!);
    const roles = fullUser?.roles?.map((r: any) => r.name) || [];

    const payload = { id: user.id, username: user.username, roles };
    const token = await this.jwtService.signAsync(payload);

    return {
      ...fullUser,
      access_token: token,
      token_type: 'Bearer',
    };
  }
}
