import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '@/common/decorator/public.decorator';

import { CreateUserDto } from './dto/create-user.dto';
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
}
