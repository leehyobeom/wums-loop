import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorDocument,
} from '@libs/schema/cursorMonitor.schema';

@Injectable()
export class CursorMonitorService {
  constructor(
    @InjectModel(CursorMonitor.name)
    private cursorMonitorModel: Model<CursorMonitorDocument>,
  ) {}

  async create(cursorMonitor: CursorMonitor): Promise<string> {
    // await this.cursorMonitorModel.create(cursorMonitor);
    return 'ok';
  }
}
