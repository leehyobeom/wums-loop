import { Module } from '@nestjs/common';
import { GqlService } from './gql.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Gql, GqlSchema } from './schemas/gql.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Gql.name, schema: GqlSchema }])],
  providers: [GqlService],
})
export class GqlModule {}
