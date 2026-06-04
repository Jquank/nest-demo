import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { PrismaService } from './prisma/prisma.service';
import { HttpInterceptor } from './common/interceptor/http.interceptor';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const ApiVersion = '1';
const ApiPrefix = 'api';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  app.setGlobalPrefix(ApiPrefix);
  app.enableCors();

  // 静态文件服务：热点图片
  const uploadsDir = join(process.cwd(), 'uploads');
  if (!existsSync(uploadsDir)) {
    mkdirSync(join(uploadsDir, 'hotspot'), { recursive: true });
  }
  app.useStaticAssets(uploadsDir, { prefix: '/uploads' });

  // 远程图片代理（避免前端跨域）
  app.use('/uploads/proxy', async (req, res) => {
    const url = req.query.url as string;
    if (!url) {
      res.status(400).send('Missing url parameter');
      return;
    }
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      if (!response.ok) {
        res.status(response.status).send('Image not found');
        return;
      }
      const buffer = Buffer.from(await response.arrayBuffer());
      const contentType = response.headers.get('content-type') || 'image/jpeg';
      res.setHeader('Content-Type', contentType);
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.send(buffer);
    } catch {
      res.status(500).send('Proxy error');
    }
  });

  const config = new DocumentBuilder()
    .setTitle('nest-demo')
    .setDescription('nest-demo api')
    .setVersion(ApiVersion)
    .addServer(`/${ApiPrefix}`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const prismaService = app.get(PrismaService);
  app.useGlobalInterceptors(new HttpInterceptor());
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
