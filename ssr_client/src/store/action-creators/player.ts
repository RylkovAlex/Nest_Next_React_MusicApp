import { ITrack } from '../../types/ITrack';
import { PlayerAction, PlayerActionTypes } from '../../types/IPlayerState';

export const PlayerActionCreators = {
  setTrack: (payload: ITrack): PlayerAction => ({
    type: PlayerActionTypes.SET_ACTIVE,
    payload,
  }),
  playTrack: (): PlayerAction => ({
    type: PlayerActionTypes.PLAY,
  }),
  pauseTrack: (): PlayerAction => ({
    type: PlayerActionTypes.PAUSE,
  }),
  setTrackDuration: (payload: number): PlayerAction => ({
    type: PlayerActionTypes.SET_DURATION,
    payload,
  }),
  setTrackVolume: (payload: number): PlayerAction => ({
    type: PlayerActionTypes.SET_VOLUME,
    payload,
  }),
  setTarckCurrentTime: (payload: number): PlayerAction => ({
    type: PlayerActionTypes.SET_CURRENT_TIME,
    payload,
  }),
};
