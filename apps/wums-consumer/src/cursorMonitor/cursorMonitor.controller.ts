import { CursorMonitorService } from './cursorMonitor.service';
import { CursorMonitor } from '@libs/schema/cursorMonitor.schema';

import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CursorMonitorController {
  constructor(private readonly cursorMonitorService: CursorMonitorService) {}

  @MessagePattern('wums')
  getHello(@Payload() message: CursorMonitor) {
    return this.cursorMonitorService.create(message);
  }
}
