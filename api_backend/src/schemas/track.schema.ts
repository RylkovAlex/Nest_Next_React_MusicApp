import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { Album } from './album.schema';
import { Comment } from './comment.schema';

export type TrackDocument = Mongoose.HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop({ required: [true, 'Track name is required'] })
  name: string;

  @Prop({ required: [true, 'Artist is required'] })
  artist: string;

  @Prop()
  text: string;

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
