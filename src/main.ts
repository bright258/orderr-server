import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'
import {MongoExceptionFilter} from "./utilities/mongoException"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  // app.useGlobalFilters(new MongoExceptionFilter());

  app.enableCors()
  await app.listen(3000);
}
bootstrap();
