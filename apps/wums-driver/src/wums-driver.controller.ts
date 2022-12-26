import { Controller, Get } from '@nestjs/common';
import { WumsDriverService } from './wums-driver.service';

@Controller()
export class WumsDriverController {
  constructor(private readonly wumsDriverService: WumsDriverService) {}

  @Get()
  getHello(): string {
    return this.wumsDriverService.getHello();
  }
}
