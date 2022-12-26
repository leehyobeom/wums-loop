import { Controller, Get } from '@nestjs/common';
import { WumsConsumerService } from './wums-consumer.service';

@Controller()
export class WumsConsumerController {
  constructor(private readonly wumsConsumerService: WumsConsumerService) {}

  @Get()
  getHello(): string {
    return this.wumsConsumerService.getHello();
  }
}
