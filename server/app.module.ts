import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NuxtController } from './controllers/nuxt.controller'

@Module({
  imports: [],
  controllers: [AppController, NuxtController],
  providers: [AppService],
})
export class AppModule {}
