import { Injectable } from '@nestjs/common';

@Injectable()
export class AlbumService {
  async create() {}
  async getAll() {
    return 'Albums';
  }
  async getOne() {}
  async delete() {}
}
