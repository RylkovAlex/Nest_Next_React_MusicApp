import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TrackModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
