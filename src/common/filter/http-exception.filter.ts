import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { PrismaService } from '../../prisma/prisma.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private prisma: PrismaService) {}
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const { method, originalUrl } = request;
    const exceptionResponse = exception.getResponse();
    let errorMsg: string = '';
    if (typeof exceptionResponse === 'string') {
      errorMsg = exceptionResponse;
    } else {
      errorMsg = (exceptionResponse as { message: string }).message || '';
    }
    try {
      await this.prisma.logReq.create({
        data: {
          method,
          path: originalUrl,
          status,
          message: errorMsg.toString(),
          timestamp: new Date().toISOString(),
        },
      });
    } finally {
      response.status(status).json({
        code: -1,
        status,
        success: false,
        message: errorMsg.toString(),
        data: null,
        method: method,
        path: request.url,
      });
    }
  }
}
