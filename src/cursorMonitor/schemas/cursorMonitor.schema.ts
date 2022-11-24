import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

export type CursorMonitorDocument = HydratedDocument<CursorMonitor>;

@ObjectType('CoordinateType')
@InputType('Coordinate')
export class Coordinate {
  @Field()
  x: number;
  @Field()
  y: number;
}

@ObjectType('CursorType')
@InputType('CursorMonitor')
@Schema()
export class CursorMonitor {
  //@Prop({ type: Types.ObjectId })
  @Field({ nullable: true })
  _id: string;

  @Prop()
  @Field()
  ip: string;

  @Prop()
  @Field()
  brand: string;

  @Prop()
  @Field((type) => [Coordinate])
  coordinate: [Coordinate];

  @Prop()
  @Field()
  date: Date;
}

export const CursorMonitorSchema = SchemaFactory.createForClass(CursorMonitor);
