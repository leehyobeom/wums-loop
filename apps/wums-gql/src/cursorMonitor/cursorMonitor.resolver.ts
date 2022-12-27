import { Args, Query, Resolver } from '@nestjs/graphql';
import { CursorMonitorService } from './cursorMonitor.service';
import { CursorMonitor } from '@libs/schema/cursorMonitor.schema';


@Resolver((of) => CursorMonitor)
export class CursorMonitorResolver {
  constructor(private cursorMonitorService: CursorMonitorService) {}

  @Query((returns) => CursorMonitor)
  async getOne(@Args('_id', { type: () => String }) _id: string) {
    return this.cursorMonitorService.getOne(_id);
  }

  @Query((returns) => [CursorMonitor])
  async gets() {
    return this.cursorMonitorService.gets();
  }
}
