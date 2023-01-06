import { AlbumService } from './album.service';
import { AlbumControlleer } from './album.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AlbumControlleer],
  providers: [AlbumService],
})
export class AlbumModule {}
