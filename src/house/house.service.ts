import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ExcelParserService } from '@/common/service/excel-parser.service';
import { ImportTenantDto } from './dto/import-tenant.dto';
import { PaginationDto } from '@/common/dto/pagination.dto';

@Injectable()
export class HouseService {
  constructor(
    private prisma: PrismaService,
    private excelParser: ExcelParserService,
  ) {}

  async importTenants(fileBuffer: Buffer<ArrayBufferLike>) {
    try {
      const tenantDtos = await this.excelParser.parseFile(
        fileBuffer,
        ImportTenantDto,
      );

      for (const dto of tenantDtos) {
        await this.prisma.tenant.create({
          data: {
            username: dto.username,
            tel: dto.tel,
          },
        });
      }
    } catch (error) {
      console.log(error);
      throw new HttpException('导入失败', 400);
    }
  }

  async getTenants(page: PaginationDto) {
    const { currentPage, pageSize } = page;
    const skip = (currentPage - 1) * pageSize;
    const [tenants, total] = await Promise.all([
      this.prisma.tenant.findMany({
        skip,
        take: pageSize,
        // 可以添加其他查询条件
        // where: { ... },
        // 可以添加排序
        // orderBy: { createdAt: 'desc' },
      }),
      this.prisma.tenant.count(),
      // 如果有查询条件，count也应该使用相同的条件
      // this.prisma.user.count({ where: { ... } }),
    ]);
    return {
      list: tenants,
      total,
    };
  }
}
