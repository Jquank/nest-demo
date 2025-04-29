import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        ...createUserDto,
      },
    });
  }

  async getUserList() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        sex: true,
      },
    });
  }

  async getUserById(id: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
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
}
