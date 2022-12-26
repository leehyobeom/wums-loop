import { Injectable } from '@nestjs/common';

@Injectable()
export class WumsConsumerService {
  getHello(): string {
    return 'Hello World!';
  }
}
