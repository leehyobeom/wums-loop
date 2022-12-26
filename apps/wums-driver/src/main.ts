import { NestFactory } from '@nestjs/core';
import { WumsDriverModule } from './wums-driver.module';

async function bootstrap() {
  const app = await NestFactory.create(WumsDriverModule);
  await app.listen(3000);
}
bootstrap();
