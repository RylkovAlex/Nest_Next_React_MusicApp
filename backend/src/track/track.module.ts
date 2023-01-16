import { MongooseModule } from '@nestjs/mongoose';
import { TrackService } from './Track.service';
import { TrackControlleer } from './Track.controller';
import { Module } from '@nestjs/common';
import { Track, TrackSchema } from 'src/schemas/track.schema';
import { Comment, CommentSchema } from 'src/schemas/comment.schema';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])
  ],
  controllers: [TrackControlleer],
  providers: [TrackService, FileService],
})
export class TrackModule {}
