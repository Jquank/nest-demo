import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RoleService } from '../role/role.service';
import { UserService } from '../user/user.service';
import {
  CreateEnumDto,
  UpdateEnumDto,
  CreateEnumItemsDto,
  UpdateEnumItemDto,
} from './dto/enum.dto';
import { PaginationDto } from '@/common/dto/pagination.dto';
import { type User } from '@prisma/client';

@Injectable()
export class EnumService {
  constructor(
    private prisma: PrismaService,
    private roleService: RoleService,
    private userService: UserService,
  ) {}

  async createEnum(createEnumDto: CreateEnumDto) {
    const enumData = await this.prisma.enum.findUnique({
      where: { code: createEnumDto.code },
    });
    if (enumData) throw new HttpException('code已存在', 400);
    await this.prisma.enum.create({
      data: createEnumDto,
    });
  }

  async updateEnum(id: number, updateEnumDto: UpdateEnumDto) {
    await this.prisma.enum.update({
      where: { id },
      data: updateEnumDto,
    });
  }

  async getEnumList(page: PaginationDto) {
    const { currentPage, pageSize } = page;
    const skip = (currentPage - 1) * pageSize;
    const [enums, total] = await Promise.all([
      this.prisma.enum.findMany({
        skip,
        take: pageSize,
        // 可添加 where/orderBy 条件
      }),
      this.prisma.enum.count(),
    ]);
    return {
      list: enums,
      total,
    };
  }

  async getEnumItemsByCode(code: string, user: User) {
    const enumData = await this.prisma.enum.findUnique({
      where: { code },
      include: { enumItems: true },
    });
    if (!enumData) return null;
    if (enumData?.type !== 'COLUMN') return enumData.enumItems;
    // 权限列处理
    const data = await Promise.all(
      enumData.enumItems.map(async (item) => {
        if (item.isAuthColumn) {
          if (!user || !user.id) return false;
          const roleName = `column-${code}-${item.value}`;
          // 查询该用户是否拥有此角色
          const roles = await this.prisma.role.findMany({
            where: {
              name: roleName,
              users: { some: { id: user.id } },
            },
          });
          return roles.length > 0;
        }
        return true;
      }),
    );
    return enumData.enumItems.filter((_, idx) => data[idx]);
  }

  /**自动生成权限列角色，命名方式：column-{code}-{item.value} */
  async createColumnRole(
    code: string,
    type: string,
    createEnumItems: CreateEnumItemsDto[],
  ) {
    await Promise.all(
      createEnumItems.map(async (item) => {
        if (item.isAuthColumn && code && type === 'COLUMN') {
          const roleName = `column-${code}-${item.value}`;
          await this.roleService.createRole({
            name: roleName,
            desc: `权限列角色：${roleName}`,
          });
        }
      }),
    );
  }

  async createEnumItems(id: number, createEnumItems: CreateEnumItemsDto[]) {
    // 获取当前枚举的 code
    const enumData = await this.prisma.enum.findUnique({ where: { id } });
    const code = enumData?.code;
    const type = enumData?.type;

    const createData = createEnumItems.map((item) => ({
      ...item,
      enumId: id,
    }));
    try {
      if (code && type) {
        await this.createColumnRole(code, type, createEnumItems);
      }
    } finally {
      await this.prisma.enumItems.createMany({
        data: createData,
      });
    }
  }

  async updateEnumItem(id: number, updateEnumItemDto: UpdateEnumItemDto) {
    await this.prisma.enumItems.update({
      where: { id },
      data: updateEnumItemDto,
    });
  }
}
