/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
// import { Prisma } from '@generate/client';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    const name = exception?.constructor.name || '';

    if (typeof exception === 'string') {
      message = exception;
    } else if (
      ['PrismaClientValidationError', 'PrismaClientKnownRequestError'].includes(
        name,
      )
    ) {
      message = JSON.stringify(exception);
    } else {
      /** empty */
    }

    // ...

    const responseBody = {
      code: -1,
      status,
      message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, status);
  }
}
