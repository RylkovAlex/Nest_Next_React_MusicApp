import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { Album } from './album.schema';
import { Track } from './track.schema';

export type CommentDocument = Mongoose.HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  user_name: string;

  @Prop()
  text: string;

  @Prop({ type: Mongoose.Schema.Types.ObjectId, ref: 'Track' })
  track: Track;

  // TODO: track | album
  @Prop({ type: Mongoose.Schema.Types.ObjectId, ref: 'Album' })
  album: Album;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
