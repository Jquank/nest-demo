import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SaltOrRounds } from '@/common/constants';
import { hash as bcryptHash } from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async register(createUserDto: CreateUserDto) {
    let hashedPassword: string;
    try {
      hashedPassword = await bcryptHash(createUserDto.password, SaltOrRounds);
    } catch (err) {
      throw new Error('Failed to hash password: ' + err);
    }

    await this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
    return null;
  }

  // 用户名查询
  async findOneByUsername(username: string, isContainPassword = false) {
    const user = await this.prisma.user.findUnique({
      where: { username },
      select: {
        password: true,
        username: true,
        id: true,
      },
    });
    return isContainPassword ? user : { ...user, password: undefined };
  }

  async getUserList() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
      },
    });
  }

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        username: true,
        roles: true,
      },
    });
  }

  async getUserByRoleIds(roleIds: number[]) {
    return await this.prisma.user.findMany({
      where: {
        roles: {
          some: {
            id: {
              in: roleIds,
            },
          },
        },
      },
    });
  }

  async getUserByRoleNames(roleNames: string[]) {
    const roleIds = await this.prisma.role.findMany({
      where: {
        name: {
          in: roleNames,
        },
      },
      select: {
        id: true,
      },
    });
    return this.getUserByRoleIds(roleIds.map((role) => role.id));
  }
}
