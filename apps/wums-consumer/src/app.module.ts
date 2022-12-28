import { Module } from '@nestjs/common';
import { CursorMonitorModule } from './cursorMonitor/cursorMonitor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    CursorMonitorModule,
  ],
})
export class AppModule {}
