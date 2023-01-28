import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/track.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Types as MongooseTypes } from 'mongoose';
import { Model } from 'mongoose';
import { Track, TrackDocument } from 'src/schemas/track.schema';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';
import { FileService, FileType } from 'src/file/file.service';

const checkId = (id) => {
  if (!MongooseTypes.ObjectId.isValid(id)) {
    throw new HttpException('Wrong id format', HttpStatus.BAD_REQUEST);
  }
};

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    private fileService: FileService,
  ) {}

  async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
    const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
    const imagePath = this.fileService.createFile(FileType.IMAGE, picture);
    await this.trackModel.create({
      ...dto,
      listens: 0,
      audio: audioPath,
      picture: imagePath,
    });
    return;
  }
  async getAll(limit = 10, offset = 0): Promise<Track[]> {
    return await this.trackModel.find().skip(offset).limit(limit);
  }
  async getOne(id: string): Promise<Track> {
    checkId(id);
    return await this.trackModel.findById(id).populate('comments');
  }
  async search(query): Promise<Track[]> {
    return await this.trackModel.find({
      name: { $regex: new RegExp(query, 'i') },
    });
  }

  async delete(id: string): Promise<Track> {
    return await this.trackModel.findByIdAndDelete(id);
  }

  async listen(trackId: string): Promise<Number> {
    const track = await this.trackModel.findById(trackId);
    track.listens++;
    await track.save();
    return track.listens;
  }

  async addComment(dto: CreateCommentDto): Promise<Comment> {
    const track = await this.trackModel.findById(dto.trackId);
    const comment = await this.commentModel.create({
      ...dto,
      track: dto.trackId,
    });
    track.comments.push(comment.id);
    await track.save();
    return comment;
  }
}
