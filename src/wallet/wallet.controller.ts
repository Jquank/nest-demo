import { Controller, Get, Post, Query, Body, Req } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { Roles } from '@/common/decorator/roles.decorator';
import { IsInt, IsString, IsOptional, Min } from 'class-validator';

class RechargeDto {
  @IsInt()
  @Min(1)
  targetUserId: number;

  @IsInt()
  @Min(1)
  amountInFen: number;

  @IsOptional()
  @IsString()
  description?: string;
}

interface IRequest extends Request {
  user: { id: number; username: string; roles?: string[] };
}

@Controller('wallet')
@ApiTags('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  getMyWallet(@Req() req: IRequest) {
    return this.walletService.getWallet(req.user.id);
  }

  @Post('recharge')
  @Roles('admin')
  recharge(@Body() dto: RechargeDto, @Req() req: IRequest) {
    return this.walletService.recharge(
      req.user.id,
      dto.targetUserId,
      dto.amountInFen,
      dto.description,
    );
  }

  @Get('transactions')
  getTransactions(
    @Req() req: IRequest,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('userId') userId?: string,
    @Query('type') type?: string,
  ) {
    // 用户只能看自己的交易记录
    return this.walletService.getTransactions(
      page ? parseInt(page, 10) : 1,
      pageSize ? parseInt(pageSize, 10) : 20,
      req.user.id,
      type,
    );
  }
}
