import { Module } from '@nestjs/common';
import { CursorMonitorController } from './cursorMonitor.controller';

@Module({
  imports: [],
  controllers: [CursorMonitorController],
  providers: [],
})
export class CursorMonitorModule {}
