import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  // Logger.log(`🚀 Application config service:= ${JSON.stringify(configService)}`);
  const port = configService.get<number>('PORT');
  const url = configService.get<string>('api.apiUrl')
  // Logger.log(`🚀 Application PORT:= ${port}`);
  await app.listen(port);
}
bootstrap();
