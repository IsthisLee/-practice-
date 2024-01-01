import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // 모든 요청에 대해 검증 파이프 적용
  app.useGlobalFilters(new HttpExceptionFilter()); // 모든 요청에 대해 예외 필터 적용s

  await app.listen(3000);
}
bootstrap();
