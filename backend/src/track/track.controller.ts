import { CreateCommentDto } from './dto/create-comment.dto';
import { ObjectId } from 'mongoose';
import { TrackService } from './Track.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { CreateTrackDto } from './dto/track.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express/multer';

/* Контроллер - слой для тупого взаимодействия с запросами и ответами (описание типа запросов, параметров, тела и т.д.) */
@Controller('/api/tracks')
export class TrackControlleer {
  constructor(private service: TrackService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'picture', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]),
  )
  create(@Body() dto: CreateTrackDto, @UploadedFiles() files) {
    const { picture, audio } = files;
    return this.service.create(dto, picture[0], audio[0]);
  }

  @Get()
  getAll(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.service.getAll(limit, offset);
  }

  @Get('/search')
  search(@Query('query') query: string) {
    console.log('searching', query);

    return this.service.search(query);
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    console.log(id);
    return this.service.getOne(id);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Post('/listen/:id')
  addListen(@Param('id') id: string) {
    return this.service.listen(id);
  }

  @Post('comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.service.addComment(dto);
  }
}
