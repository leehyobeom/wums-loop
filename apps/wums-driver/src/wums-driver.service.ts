import { Injectable } from '@nestjs/common';

@Injectable()
export class WumsDriverService {
  getHello(): string {
    return 'Hello World!';
  }
}
