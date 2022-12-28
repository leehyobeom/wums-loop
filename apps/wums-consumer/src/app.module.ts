import { Module } from '@nestjs/common';
import { CursorMonitorModule } from './cursorMonitor/cursorMonitor.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      // `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_ENDPOINT}`,
      `mongodb://mongodb:27017/wums`,
    ),
    CursorMonitorModule,
  ],
})
export class AppModule {}
