import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorDocument,
} from './schemas/cursorMonitor.schema';
import { CursorMonitorDTO } from './dto/cursorMonitor.dto';

@Injectable()
export class CursorMonitorService {
  constructor(
    @InjectModel(CursorMonitor.name)
    private cursorMonitorModel: Model<CursorMonitorDocument>,
  ) {}

  async get(): Promise<CursorMonitorDTO> {
    console.log(await this.cursorMonitorModel.findOne());
    return await this.cursorMonitorModel.findOne();
  }
}
