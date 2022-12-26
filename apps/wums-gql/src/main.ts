import { NestFactory } from '@nestjs/core';
import { WumsGqlModule } from './wums-gql.module';

async function bootstrap() {
  const app = await NestFactory.create(WumsGqlModule);
  await app.listen(3000);
}
bootstrap();
