import { NestFactory } from '@nestjs/core';
import { WumsConsumerModule } from './wums-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(WumsConsumerModule);
  await app.listen(3000);
}
bootstrap();
