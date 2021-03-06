import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const host = process.env.HOST || '0.0.0.0';
  const port = process.env.PORT || 4000

  await app.listen(port, host);
}
bootstrap();
