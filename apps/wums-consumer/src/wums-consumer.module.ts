import { Module } from '@nestjs/common';
import { WumsConsumerController } from './wums-consumer.controller';
import { WumsConsumerService } from './wums-consumer.service';

@Module({
  imports: [],
  controllers: [WumsConsumerController],
  providers: [WumsConsumerService],
})
export class WumsConsumerModule {}
