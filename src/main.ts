import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT_APP || 5000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server started, PORT = ${PORT}`));
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
