import { Module } from '@nestjs/common';
import { WumsGqlController } from './wums-gql.controller';
import { WumsGqlService } from './wums-gql.service';

@Module({
  imports: [],
  controllers: [WumsGqlController],
  providers: [WumsGqlService],
})
export class WumsGqlModule {}
