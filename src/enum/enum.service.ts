import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateEnumDto,
  UpdateEnumDto,
  CreateEnumItemsDto,
  UpdateEnumItemDto,
} from './dto/enum.dto';

@Injectable()
export class EnumService {
  constructor(private prisma: PrismaService) {}

  async createEnum(createEnumDto: CreateEnumDto) {
    await this.prisma.enum.create({
      data: createEnumDto,
    });
  }

  async createEnumItems(id: number, createEnumItemsDto: CreateEnumItemsDto[]) {
    await this.prisma.enumItems.createMany({
      data: createEnumItemsDto.map((item) => ({
        ...item,
        enumId: id,
      })),
    });
  }

  async updateEnum(id: number, updateEnumDto: UpdateEnumDto) {
    await this.prisma.enum.update({
      where: { id, enable: true },
      data: updateEnumDto,
    });
  }

  async updateEnumItem(id: number, updateEnumItemDto: UpdateEnumItemDto) {
    await this.prisma.enumItems.update({
      where: { id },
      data: updateEnumItemDto,
    });
  }
}
