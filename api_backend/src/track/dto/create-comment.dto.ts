import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateCommentDto {
  @IsNotEmpty()
  readonly user_name: string;
  @IsNotEmpty()
  readonly text: string;
  @IsNotEmpty()
  readonly trackId: ObjectId;
}
