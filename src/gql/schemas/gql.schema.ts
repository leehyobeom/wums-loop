import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GqlDocument = HydratedDocument<Gql>;

@Schema()
export class Gql {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const GqlSchema = SchemaFactory.createForClass(Gql);
