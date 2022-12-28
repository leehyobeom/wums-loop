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
      `mongodb+srv://LeeHyoBeom:Lsb964183!@cluster0.gdscktn.mongodb.net/WUMS`,
      //`mongodb://mongodb:27017/wums`,
    ),
    CursorMonitorModule,
  ],
})
export class AppModule {}
