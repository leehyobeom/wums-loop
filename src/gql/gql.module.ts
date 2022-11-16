import { Module } from '@nestjs/common';
import { GqlService } from './gql.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: 'schema.gpl',
    }),
  ],
  providers: [GqlService],
})
export class GqlModule {}
