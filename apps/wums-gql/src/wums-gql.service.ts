import { Injectable } from '@nestjs/common';

@Injectable()
export class WumsGqlService {
  getHello(): string {
    return 'Hello World!';
  }
}
