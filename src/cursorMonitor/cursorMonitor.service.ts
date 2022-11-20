import { Model, mongo } from 'mongoose';
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
    return await this.cursorMonitorModel.findOne();
  }

  async getOne(_id: string): Promise<CursorMonitorDTO> {
    return await this.cursorMonitorModel.findById(new mongo.ObjectId(_id));
  }

  async gets(): Promise<[CursorMonitorDTO]> {
    return <[CursorMonitorDTO]>await this.cursorMonitorModel.find();
  }
}
