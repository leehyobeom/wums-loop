import { InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CursorMonitor } from './cursorMonitor.schema';

@ObjectType()
export class CursorMonitorDTO extends PartialType(CursorMonitor) {}
