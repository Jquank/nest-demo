import { Module, Global } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SharedController } from './shared.controller';

@Global()
@Module({
  controllers: [SharedController],
  providers: [SharedService],
})
export class SharedModule {}
