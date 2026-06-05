import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, AdminCreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { SaltOrRounds } from '@/common/constants';
import { hash as bcryptHash, compare as bcryptCompare } from 'bcrypt';
import { randomBytes } from 'crypto';
import { unlinkSync, existsSync } from 'fs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /** 生成随机密码（12位，含大小写字母+数字+符号） */
  generatePassword(): string {
    const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // 去掉易混淆的 I/O
    const lower = 'abcdefghjkmnpqrstuvwxyz';
    const digits = '23456789'; // 去掉 0/1
    const symbols = '!@#$%&*';
    const all = upper + lower + digits + symbols;
    // 确保每种至少一个
    const parts = [
      upper[randomBytes(1)[0] % upper.length],
      lower[randomBytes(1)[0] % lower.length],
      digits[randomBytes(1)[0] % digits.length],
      symbols[randomBytes(1)[0] % symbols.length],
    ];
    // 补齐到12位
    const buf = randomBytes(16);
    for (let i = parts.length; i < 12; i++) {
      parts.push(all[buf[i] % all.length]);
    }
    // 洗牌
    for (let i = parts.length - 1; i > 0; i--) {
      const j = buf[i] % (i + 1);
      [parts[i], parts[j]] = [parts[j], parts[i]];
    }
    return parts.join('');
  }

  /** 默认角色的权限（注册用户自动获得） */
  private readonly DEFAULT_USER_MENUS = [
    'menu:ai-image',
    'menu:hotspot',
    'menu:transaction-history',
  ];

  /** 获取或创建默认 user 角色 */
  private async getOrCreateUserRole() {
    const roleName = 'user';
    let role = await this.prisma.role.findUnique({
      where: { name: roleName },
    });
    if (!role) {
      role = await this.prisma.role.create({
        data: {
          name: roleName,
          desc: '普通用户，拥有基础菜单权限',
          permissions: this.DEFAULT_USER_MENUS,
        },
      });
    }
    return role;
  }

  async register(createUserDto: CreateUserDto) {
    // 检查重名
    const existed = await this.prisma.user.findUnique({
      where: { username: createUserDto.username },
    });
    if (existed) {
      throw new BadRequestException('用户名已存在');
    }

    const hashedPassword = await bcryptHash(createUserDto.password, SaltOrRounds);
    const userRole = await this.getOrCreateUserRole();

    // 事务：创建用户 + 绑定角色，保证原子性
    const user = await this.prisma.$transaction(async (tx) => {
      const created = await tx.user.create({
        data: {
          username: createUserDto.username,
          password: hashedPassword,
          name: createUserDto.name || createUserDto.username,
          roles: { connect: [{ id: userRole.id }] },
        },
        select: {
          id: true,
          username: true,
          name: true,
          roles: {
            select: { id: true, name: true, permissions: true },
          },
        },
      });
      return created;
    });

    return { ...user, roleName: userRole.name };
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

  // ========== 管理端：分页列表 ==========

  async getPaginatedList(page = 1, pageSize = 20, keyword?: string) {
    const where: any = {};
    if (keyword) {
      where.OR = [
        { username: { contains: keyword } },
        { name: { contains: keyword } },
      ];
    }
    const [records, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
        select: {
          id: true,
          username: true,
          name: true,
          email: true,
          isActive: true,
          isVerified: true,
          createdAt: true,
          lastLoginAt: true,
          roles: { select: { id: true, name: true } },
        },
      }),
      this.prisma.user.count({ where }),
    ]);
    return { records, total, page, pageSize };
  }

  // ========== 管理端：创建用户 ==========

  async create(dto: AdminCreateUserDto) {
    const existed = await this.prisma.user.findUnique({
      where: { username: dto.username },
    });
    if (existed) throw new BadRequestException('用户名已存在');

    const password = dto.password || this.generatePassword();
    const hashedPassword = await bcryptHash(password, SaltOrRounds);

    const user = await this.prisma.user.create({
      data: {
        username: dto.username,
        password: hashedPassword,
        name: dto.name || dto.username,
        roles: dto.roleIds?.length
          ? { connect: dto.roleIds.map((id) => ({ id })) }
          : undefined,
      },
      select: {
        id: true,
        username: true,
        name: true,
        roles: { select: { id: true, name: true } },
        createdAt: true,
      },
    });

    return { ...user, initialPassword: password };
  }

  // ========== 管理端：更新用户 ==========

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('用户不存在');

    const data: any = {};
    if (dto.name !== undefined) data.name = dto.name;
    if (dto.email !== undefined) data.email = dto.email;
    if (dto.isActive !== undefined) data.isActive = dto.isActive;
    if (dto.password) {
      data.password = await bcryptHash(dto.password, SaltOrRounds);
    }
    if (dto.roleIds !== undefined) {
      data.roles = { set: dto.roleIds.map((id) => ({ id })) };
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        username: true,
        name: true,
        email: true,
        isActive: true,
        roles: { select: { id: true, name: true } },
      },
    });
  }

  // ========== 管理端：重置密码 ==========

  async resetPassword(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('用户不存在');

    const newPassword = this.generatePassword();
    const hashedPassword = await bcryptHash(newPassword, SaltOrRounds);

    await this.prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });

    return { newPassword };
  }

  // ========== 当前用户修改密码 ==========

  async changePassword(userId: number, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, password: true },
    });
    if (!user) throw new BadRequestException('用户不存在');

    const isValid = await bcryptCompare(dto.oldPassword, user.password || '');
    if (!isValid) throw new BadRequestException('旧密码错误');

    const hashedPassword = await bcryptHash(dto.newPassword, SaltOrRounds);
    await this.prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return { success: true };
  }

  // ========== 管理端：删除用户 ==========

  async delete(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('用户不存在');

    // 先删除 AI 图片文件
    const imageRecords = await this.prisma.aiImageRecord.findMany({
      where: { userId: id },
      select: { localPath: true },
    });
    for (const r of imageRecords) {
      try {
        if (r.localPath && existsSync(r.localPath)) {
          unlinkSync(r.localPath);
        }
      } catch {
        // 忽略文件删除失败
      }
    }

    // 清理数据库关联数据，再删除用户
    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id },
        data: { roles: { set: [] } },
      }),
      this.prisma.wallet.deleteMany({ where: { userId: id } }),
      this.prisma.transaction.deleteMany({ where: { userId: id } }),
      this.prisma.aiImageRecord.deleteMany({ where: { userId: id } }),
      this.prisma.aiImagePrompt.deleteMany({ where: { userId: id, isSystem: false } }),
      this.prisma.user.delete({ where: { id } }),
    ]);

    return { success: true };
  }
}
