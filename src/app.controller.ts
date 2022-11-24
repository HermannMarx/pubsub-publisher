import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatPublisher } from './Publisher/CatPublisher';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private catPublisher: CatPublisher,
  ) {}

  @Get('/cats')
  getPubSub(): string {
    this.catPublisher.publish();
    return 'Is publishing cats';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
