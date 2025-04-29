import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { SharedModule } from './shared/shared.module';
import { LoggerMiddleware } from './common/middleware/logger';
import { PrismaModule } from './prisma/prisma.module';
import { BoardModule } from './board/board.module';
// import { AllExceptionsFilter } from './common/filter/all-exception.filter';
// import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [UserModule, RoleModule, SharedModule, PrismaModule, BoardModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: AllExceptionsFilter,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
