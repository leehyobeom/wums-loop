import { ICursorService, Idata } from './cursorMonitor.interface';
import { Controller, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';

import {
  MessagePattern,
  Payload,
  Client,
  Transport,
  ClientGrpc,
} from '@nestjs/microservices';
import { join } from 'path';

@Controller()
export class CursorMonitorController implements OnModuleInit {
  private cursorService: ICursorService;

  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'cursorPackage',
      protoPath: join(__dirname, '../cursorMonitor.proto'),
    },
  })
  client: ClientGrpc;

  onModuleInit() {
    this.cursorService =
      this.client.getService<ICursorService>('CursorService');
  }

  @MessagePattern('wums')
  getMessage(@Payload() messages: Idata[]): Observable<any> {
    const [message] = messages;
    return this.cursorService.setCursorData(message);
  }
}
