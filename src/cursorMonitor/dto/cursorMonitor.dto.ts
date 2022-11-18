import { InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CursorMonitor } from '../schemas/cursorMonitor.schema';

@InputType()
@ObjectType()
export class CursorMonitorDTO extends PartialType(CursorMonitor) {}
