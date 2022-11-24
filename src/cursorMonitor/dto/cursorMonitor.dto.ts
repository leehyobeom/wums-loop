import { InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CursorMonitor } from '../schemas/cursorMonitor.schema';

@ObjectType()
export class CursorMonitorDTO extends PartialType(CursorMonitor) {}
