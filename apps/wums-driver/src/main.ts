import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:50001',
        package: 'cursorMonitor',
        protoPath: join(__dirname, '../../../../../assets/cursorMonitor.proto'),
      },
    },
  );
  app.listen();
}
bootstrap();
