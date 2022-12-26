import { Module } from '@nestjs/common';
import { CursorMonitorService } from './cursorMonitor.service';
import { CursorMonitorResolver } from './cursorMonitor.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorSchema,
} from './schemas/cursorMonitor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CursorMonitor.name, schema: CursorMonitorSchema },
    ]),
  ],
  providers: [CursorMonitorService, CursorMonitorResolver],
})
export class CursorMonitorModule {}
