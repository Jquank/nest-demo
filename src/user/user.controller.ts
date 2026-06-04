import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  Query,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '@/common/decorator/public.decorator';
import { Roles } from '@/common/decorator/roles.decorator';
import { CreateUserDto, AdminCreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { User } from '@prisma/client';

interface IRequest extends Request {
  user: User;
}

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @Public()
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: '' })
  getUser(@Req() req: IRequest) {
    return this.userService.getUserById(req.user.id);
  }

  @Get('list')
  getUserList() {
    return this.userService.getUserList();
  }

  @Get('byRoleNames')
  getUserByRoleNames(@Query('roleNames') roleNames: string) {
    return this.userService.getUserByRoleNames(roleNames.split(','));
  }

  @Get('byRoleIds')
  getUserByRoleIds(@Query('roleIds') roleIds: string) {
    return this.userService.getUserByRoleIds(
      roleIds.split(',').map((id) => +id),
    );
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: '' })
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  // ========== 管理端 ==========

  @Get('manage/paginated')
  @Roles('admin')
  getPaginatedList(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('keyword') keyword?: string,
  ) {
    return this.userService.getPaginatedList(
      page ? parseInt(page, 10) : 1,
      pageSize ? parseInt(pageSize, 10) : 20,
      keyword,
    );
  }

  @Post('manage')
  @Roles('admin')
  create(@Body() dto: AdminCreateUserDto) {
    return this.userService.create(dto);
  }

  @Put('manage/:id')
  @Roles('admin')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Post('manage/:id/reset-password')
  @Roles('admin')
  resetPassword(@Param('id', ParseIntPipe) id: number) {
    return this.userService.resetPassword(id);
  }

  @Delete('manage/:id')
  @Roles('admin')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
