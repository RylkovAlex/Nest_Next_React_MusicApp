import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as Mongoose from 'mongoose';
import { Track } from './track.schema';

export type AlbumDocument = Mongoose.HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  listens: number;

  @Prop({ type: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'Track' }] })
  tracks: Track[];

  @Prop()
  picture: string;

  @Prop({ type: [{ type: Mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
