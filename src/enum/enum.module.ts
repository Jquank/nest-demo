import { Module } from '@nestjs/common';
import { EnumService } from './enum.service';
import { EnumController } from './enum.controller';
import { PrismaService } from '../prisma/prisma.service';
import { RoleModule } from '../role/role.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [RoleModule, UserModule],
  controllers: [EnumController],
  providers: [EnumService, PrismaService],
})
export class EnumModule {}
