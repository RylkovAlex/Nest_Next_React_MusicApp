import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { Album } from './album.schema';
import { Comment } from './comment.schema';

export type TrackDocument = Mongoose.HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  listens: number;

  @Prop()
  audio: string;

  @Prop()
  picture: string;

  @Prop({ type: Mongoose.Schema.Types.ObjectId, ref: 'Album' })
  album: Album;

  @Prop({ type: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
