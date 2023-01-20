import {
  ITrackState,
  TrackAction,
  TrackActionTypes,
} from './../../types/ITrack';

const initialState: ITrackState = {
  tracks: [],
  error: null,
};

export const trackReducer = (
  state = initialState,
  action: TrackAction
): ITrackState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload };
    case TrackActionTypes.FETCH_TRACKS_OK:
      return { error: '', tracks: action.payload };
    default:
      console.log('default');
      return state;
  }
};
