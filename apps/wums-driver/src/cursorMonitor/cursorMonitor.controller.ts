import { CursorMonitorService } from './cursorMonitor.service';
import { CursorMonitor } from '@libs/schema/cursorMonitor.schema';

import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';

@Controller()
export class CursorMonitorController {
  constructor(private readonly cursorMonitorService: CursorMonitorService) {}

  @GrpcMethod('CursorService', 'SetCursorData')
  async setCursorData(
    cursorMonitor: CursorMonitor,
  ): Promise<{ result: string }> {
    return { result: await this.cursorMonitorService.create(cursorMonitor) };
  }
}
