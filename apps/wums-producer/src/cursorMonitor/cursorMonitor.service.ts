import { Model, mongo } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorDocument,
} from '@libs/schema/cursorMonitor.schema';
import { CursorMonitorDTO } from '@libs/schema/cursorMonitor.dto';

@Injectable()
export class CursorMonitorService {
  constructor(
    @InjectModel(CursorMonitor.name)
    private cursorMonitorModel: Model<CursorMonitorDocument>,
  ) {}

  async getOne(_id: string): Promise<CursorMonitorDTO> {
    return await this.cursorMonitorModel.findById(new mongo.ObjectId(_id));
  }

  async gets(): Promise<[CursorMonitorDTO]> {
    return <[CursorMonitorDTO]>await this.cursorMonitorModel.find();
  }

  async create(cursorMonitor: CursorMonitor): Promise<string> {
    await this.cursorMonitorModel.create(cursorMonitor);
    return 'ok';
  }
}
