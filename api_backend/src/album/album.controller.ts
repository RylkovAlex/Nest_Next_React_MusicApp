import { AlbumService } from './album.service';
import { Controller, Get } from '@nestjs/common';

/* Контроллер - слой для тупого взаимодействия с запросами и ответами (описание типа запросов, параметров, тела и т.д.) */
@Controller('/api/Albums')
export class AlbumControlleer {
  constructor(private AlbumService: AlbumService) {}
  create() {}

  @Get()
  getAll() {
    return this.AlbumService.getAll();
  }
  getOne() {}
  delete() {}
}
