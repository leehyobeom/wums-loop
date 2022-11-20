import { ObjectType, Field } from '@nestjs/graphql';
import { CursorMonitor } from '../schemas/cursorMonitor.schema';

@ObjectType()
export class CursorMonitorDTO {
  @Field(type => [CursorMonitor])
  cursorMonitors: CursorMonitor[];
}
