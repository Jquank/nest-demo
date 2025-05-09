import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  use(req: Request, res: Response, next: NextFunction) {
    next();
  }
}
