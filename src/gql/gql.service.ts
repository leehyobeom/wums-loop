import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Injectable()
export class GqlService {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
