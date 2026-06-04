import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { SharedModule } from './shared/shared.module';
import { LoggerMiddleware } from './common/middleware/logger';
import { PrismaModule } from './prisma/prisma.module';
import { BoardModule } from './board/board.module';
import { AllExceptionsFilter } from './common/filter/all-exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { EnumModule } from './enum/enum.module';
import { HotspotModule } from './hotspot/hotspot.module';
import { AiImageModule } from './ai-image/ai-image.module';
import { WalletModule } from './wallet/wallet.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CleanupService } from './common/service/cleanup.service';

@Module({
  imports: [
    UserModule,
    RoleModule,
    SharedModule,
    PrismaModule,
    BoardModule,
    AuthModule,
    EnumModule,
    HotspotModule,
    AiImageModule,
    WalletModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CleanupService,
    // 全局异常过滤器
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
