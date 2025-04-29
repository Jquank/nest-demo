import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@generate/client';
import {
  CreateRoleDto,
  DeleteRoleDto,
  BindUserDto,
  FindRoleDto,
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
    return await this.prisma.role.deleteMany({
      where: {
        id: { in: deleteRoleDto.ids },
      },
    });
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
            name: true,
          },
        },
      },
    });
  }

  async getRoles(findRoleDto?: FindRoleDto) {
    if (!findRoleDto) {
      return await this.prisma.role.findMany({});
    }
    const { name, desc } = findRoleDto;
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
