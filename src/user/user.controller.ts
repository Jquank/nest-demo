import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
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
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }
}
