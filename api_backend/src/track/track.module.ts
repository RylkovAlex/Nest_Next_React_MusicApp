import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { Track, TrackSchema } from 'src/schemas/track.schema';
import { Comment, CommentSchema } from 'src/schemas/comment.schema';
import { FileService } from 'src/file/file.service';
import { TrackControlleer } from './track.controller';
import { TrackService } from './track.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])
  ],
  controllers: [TrackControlleer],
  providers: [TrackService, FileService],
})
export class TrackModule {}
