import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* Controller - слой для взаимодействия с запросами и ответами (описание типа запросов, параметров, тела и т.д. и т.п.) */
@Controller('/api')
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getUsers() {
    return this.appService.getUsers();
  }
}
