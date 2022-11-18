import { Query, Resolver } from '@nestjs/graphql';
import { CursorMonitorService } from './cursorMonitor.service';
import { CursorMonitor } from './schemas/cursorMonitor.schema';

@Resolver((of) => CursorMonitor)
export class CursorMonitorResolver {
  constructor(private cursorMonitorService: CursorMonitorService) {}

  @Query((returns) => CursorMonitor)
  async get() {
    return this.cursorMonitorService.get();
  }
}
