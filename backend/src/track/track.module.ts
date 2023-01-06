import { TrackService } from './Track.service';
import { TrackControlleer } from './Track.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [TrackControlleer],
  providers: [TrackService],
})
export class TrackModule {}
