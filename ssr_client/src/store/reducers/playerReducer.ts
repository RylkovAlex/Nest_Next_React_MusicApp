import {
  IPlayerState,
  PlayerAction,
  PlayerActionTypes,
} from './../../types/IPlayerState';

const initialState: IPlayerState = {
  active: null,
  volume: 30,
  duration: 0,
  currentTime: 0,
  pause: true,
};
export const playerReducer = (
  state = initialState,
  action: PlayerAction
): IPlayerState => {
  switch (action.type) {
    case PlayerActionTypes.PAUSE:
      return { ...state, pause: true };
    case PlayerActionTypes.PLAY:
      return { ...state, pause: false };
    case PlayerActionTypes.SET_ACTIVE:
      return { ...state, active: action.payload, duration: 0, currentTime: 0 };
    case PlayerActionTypes.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload };
    case PlayerActionTypes.SET_DURATION:
      return { ...state, duration: action.payload };
    case PlayerActionTypes.SET_VOLUME:
      return { ...state, volume: action.payload };

    default:
      return state;
  }
};
