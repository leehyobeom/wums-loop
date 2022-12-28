import { Module } from '@nestjs/common';
import { CursorMonitorService } from './cursorMonitor.service';
import { CursorMonitorController } from './cursorMonitor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorSchema,
} from '@libs/schema/cursorMonitor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CursorMonitor.name, schema: CursorMonitorSchema },
    ]),
  ],
  controllers: [CursorMonitorController],
  providers: [CursorMonitorService],
})
export class CursorMonitorModule {}
