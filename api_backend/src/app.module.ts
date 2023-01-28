import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from "@nestjs/config";
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
   }),
    MongooseModule.forRoot(process.env.DOCKER ? process.env.MONGO_DOCKER_URI : process.env.MONGO_URI),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    AlbumModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
