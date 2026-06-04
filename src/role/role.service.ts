import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  CreateRoleDto,
  DeleteRoleDto,
  BindUserDto,
  BindPermissionDto,
} from './dto/role.dto';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(createRoleDto: CreateRoleDto) {
    return await this.prisma.role.create({
      data: {
        ...createRoleDto,
      },
    });
  }

  async deleteRole(deleteRoleDto: DeleteRoleDto) {
    // 逐个删除，Prisma 的 delete 会自动清理多对多关联表
    for (const id of deleteRoleDto.ids) {
      await this.prisma.role.delete({ where: { id } });
    }
    return { success: true, deleted: deleteRoleDto.ids.length };
  }

  async updateRole(id: number, createRoleDto: CreateRoleDto) {
    return await this.prisma.role.update({
      where: {
        id,
      },
      data: {
        ...createRoleDto,
      },
    });
  }

  async getRoleById(id: number) {
    return await this.prisma.role.findUnique({
      where: {
        id,
      },
      include: {
        users: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
  }

  async getRoles(name?: string, desc?: string) {
    if (!name && !desc) {
      return await this.prisma.role.findMany({});
    }
    const where: Prisma.RoleWhereInput = {};
    if (name) where.name = { contains: name };
    if (desc) where.desc = { contains: desc };
    return await this.prisma.role.findMany({
      where,
    });
  }

  async bindUser(bindUserDto: BindUserDto) {
    const { roleId, userIds = [] } = bindUserDto;
    return await this.prisma.role.update({
      where: {
        id: roleId,
      },
      data: {
        users: {
          connect: userIds.map((id) => ({ id })),
        },
      },
    });
  }
  async bindPermission(bindUserDto: BindPermissionDto) {
    const { roleId, permissions } = bindUserDto;
    return await this.prisma.role.update({
      where: {
        id: roleId,
      },
      data: {
        permissions,
      },
    });
  }
}
