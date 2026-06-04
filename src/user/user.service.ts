import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto, AdminCreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SaltOrRounds } from '@/common/constants';
import { hash as bcryptHash } from 'bcrypt';
import { randomBytes } from 'crypto';

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

  // ========== 管理端：删除用户 ==========

  async delete(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new BadRequestException('用户不存在');
    return this.prisma.user.delete({ where: { id } });
  }
}
