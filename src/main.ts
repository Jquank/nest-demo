import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
// import { AllExceptionsFilter } from './common/filter/all-exception.filter';
import { PrismaService } from './prisma/prisma.service';
import { HttpInterceptor } from './common/interceptor/http.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
  });

  const config = new DocumentBuilder()
    .setTitle('nest-demo')
    .setDescription('nest-demo api')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const prismaService = app.get(PrismaService);
  app.useGlobalInterceptors(new HttpInterceptor());
  // app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionFilter(prismaService));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 自动移除非 DTO 属性
      forbidNonWhitelisted: false, // 如果有非 DTO 属性则报错
      transform: true, // 自动转换请求参数类型
      disableErrorMessages: false, // 不返回详细的验证错误信息
      transformOptions: {
        enableImplicitConversion: true, // 启用隐式类型转换
      },
      // skipMissingProperties: true, // 允许空主体
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
