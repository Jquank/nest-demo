import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from '@/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Public } from '@/common/decorator/public.decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }
}
