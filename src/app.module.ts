import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { gameModule } from './games/game.module';
import { GoogleStrategy } from './google.strategy';
import { typeOrmConfig } from './typeormcofig';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, gameModule ,TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
