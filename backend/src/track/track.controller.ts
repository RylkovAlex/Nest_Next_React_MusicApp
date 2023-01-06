import { TrackService } from './Track.service';
import { Controller, Get } from '@nestjs/common';

/* Контроллер - слой для тупого взаимодействия с запросами и ответами (описание типа запросов, параметров, тела и т.д.) */
@Controller('/api/Tracks')
export class TrackControlleer {
  constructor(private TrackService: TrackService) {}
  create() {}

  @Get()
  getAll() {
    return this.TrackService.getAll();
  }
  getOne() {}
  delete() {}
}
