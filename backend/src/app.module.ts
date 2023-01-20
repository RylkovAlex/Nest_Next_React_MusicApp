import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.iygetib.mongodb.net/music-test?retryWrites=true&w=majority'),
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

console.log({'path': __dirname})
