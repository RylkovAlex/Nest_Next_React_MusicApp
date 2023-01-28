import { IComment } from './IComment';

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface ITrackState {
  tracks: ITrack[];
  error: string | null;
}

export enum TrackActionTypes {
  FETCH_TRACKS_OK = 'FETCH_TRACKS_OK',
  FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}

interface FetchTrackOkAction {
  type: TrackActionTypes.FETCH_TRACKS_OK;
  payload: ITrack[];
}

interface FetchTrackErrorAction {
  type: TrackActionTypes.FETCH_TRACKS_ERROR;
  payload: string;
}

export type TrackAction = FetchTrackOkAction | FetchTrackErrorAction;
