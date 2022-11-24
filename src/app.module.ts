import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatPublisher } from './Publisher/CatPublisher';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CatPublisher],
})
export class AppModule {}
