import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse<T> {
  code: number;
  success: boolean;
  data: T;
}

@Injectable()
export class HttpInterceptor<T> implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    const response = context.switchToHttp().getResponse();
    // API 响应禁止浏览器缓存（数据是动态的）
    response.setHeader('Cache-Control', 'no-store');

    return next.handle().pipe(
      map((data: T) => ({
        code: 0,
        success: true,
        data,
      })),
    );
  }
}
