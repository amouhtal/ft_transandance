import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  {
        cors: {
            origin: 'http://localhost:3000/',
            credentials: true,},
          });

  app.use(cookieParser());
  // app.enableCors({
  //   origin: "*"
  // })
  await app.listen(3000);
}
bootstrap();
