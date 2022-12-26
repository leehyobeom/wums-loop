import { Controller, Get } from '@nestjs/common';
import { WumsGqlService } from './wums-gql.service';

@Controller()
export class WumsGqlController {
  constructor(private readonly wumsGqlService: WumsGqlService) {}

  @Get()
  getHello(): string {
    return this.wumsGqlService.getHello();
  }
}
