import { Model, mongo } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  CursorMonitor,
  CursorMonitorDocument,
} from '@libs/schema/cursorMonitor.schema';
import { CursorMonitorDTO } from '@libs/schema/cursorMonitor.dto';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class CursorMonitorService {
  constructor(
    @InjectModel(CursorMonitor.name)
    private cursorMonitorModel: Model<CursorMonitorDocument>,
  ) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'wums',
        brokers: ['kafka:9092'],
      },
      consumer: {
        groupId: 'wums',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('wums');
    await this.client.connect();
  }

  async getOne(_id: string): Promise<CursorMonitorDTO> {
    return await this.cursorMonitorModel.findById(new mongo.ObjectId(_id));
  }

  async gets(): Promise<[CursorMonitorDTO]> {
    return <[CursorMonitorDTO]>await this.cursorMonitorModel.find();
  }

  async create(cursorMonitor: CursorMonitor): Promise<any> {
    return this.client.send('wums', cursorMonitor);
  }

  // async create(cursorMonitor: CursorMonitor): Promise<string> {
  //   await this.cursorMonitorModel.create(cursorMonitor);
  //   return 'ok';
  // }
}
