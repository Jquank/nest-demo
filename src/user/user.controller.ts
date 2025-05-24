import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '@/common/decorator/public.decorator';

import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @Public()
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
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
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }
}
