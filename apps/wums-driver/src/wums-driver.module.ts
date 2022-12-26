import { Module } from '@nestjs/common';
import { WumsDriverController } from './wums-driver.controller';
import { WumsDriverService } from './wums-driver.service';

@Module({
  imports: [],
  controllers: [WumsDriverController],
  providers: [WumsDriverService],
})
export class WumsDriverModule {}
