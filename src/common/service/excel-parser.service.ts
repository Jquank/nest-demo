// src/common/services/excel-parser.service.ts
import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

@Injectable()
export class ExcelParserService {
  async parseFile<T extends object>(
    fileBuffer: Buffer,
    dtoClass: new () => T,
  ): Promise<T[]> {
    const workbook = XLSX.read(fileBuffer);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      raw: false, // 不使用原始值
      defval: '', // 空值默认转为空字符串
      blankrows: false, // 跳过空行
    });

    const results: T[] = [];

    for (const row of jsonData) {
      const instance = plainToInstance(dtoClass, row);
      await validateOrReject(instance);
      results.push(instance);
    }

    return results;
  }
}
