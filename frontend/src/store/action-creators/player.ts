import { ITrack } from '../../types/ITrack';
import { PlayerAction, PlayerActionTypes } from '../../types/IPlayerState';

export const setTrack = (payload: ITrack): PlayerAction => ({
  type: PlayerActionTypes.SET_ACTIVE,
  payload,
});

export const playTrack = (): PlayerAction => ({
  type: PlayerActionTypes.PLAY,
});

export const pauseTrack = (): PlayerAction => ({
  type: PlayerActionTypes.PAUSE,
});

export const setTrackDuration = (payload: number): PlayerAction => ({
  type: PlayerActionTypes.SET_DURATION,
  payload,
});

export const setTrackVolume = (payload: number): PlayerAction => ({
  type: PlayerActionTypes.SET_VOLUME,
  payload,
});

export const setTarckCurrentTime = (payload: number): PlayerAction => ({
  type: PlayerActionTypes.SET_CURRENT_TIME,
  payload,
});
