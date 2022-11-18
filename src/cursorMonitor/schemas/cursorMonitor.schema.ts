import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

export type CursorMonitorDocument = HydratedDocument<CursorMonitor>;

@ObjectType()
export class test {
  @Field()
  x: number;
  @Field()
  y: number;
}

@ObjectType()
@Schema()
export class CursorMonitor {
  @Prop()
  @Field()
  ip: string;

  @Prop()
  @Field()
  brand: string;

  @Prop()
  @Field(type => [test])
  coordinate: test[];

  @Prop()
  @Field()
  date: Date;
}

export const CursorMonitorSchema = SchemaFactory.createForClass(CursorMonitor);
