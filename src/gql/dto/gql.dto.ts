import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Gql } from '../schemas/gql.schema';

@InputType()
export class GqlDTO extends PickType(Gql, ['name']) {}
