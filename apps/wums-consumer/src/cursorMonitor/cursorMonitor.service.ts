import { Model } from 'mongoose';
import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Observable } from 'rxjs';
import {
  CursorMonitor,
  CursorMonitorDocument,
} from '@libs/schema/cursorMonitor.schema';
import { join } from 'path';
import {
  ClientGrpc,
  GrpcMethod,
  Client,
  Transport,
} from '@nestjs/microservices';
interface CursorService {
  setCursorData(data: CursorMonitor): Observable<any>;
}
@Injectable()
export class CursorMonitorService implements OnModuleInit {
  private cursorService: CursorService;

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'cursorMonitor',
      protoPath: join(__dirname, '../cursorMonitor.proto'),
    },
  })
  client: ClientGrpc;

  onModuleInit() {
    this.cursorService = this.client.getService<CursorService>('CursorService');
  }

  sendToDriver(message: CursorMonitor) {
    return this.cursorService.setCursorData(message);
  }
}
