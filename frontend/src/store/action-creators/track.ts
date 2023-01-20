import { TrackAction, TrackActionTypes } from '@/types/ITrack';
import axios from 'axios';
import { Dispatch } from 'react';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/api/tracks');
      if (+response.status === 200) {
        dispatch({
          type: TrackActionTypes.FETCH_TRACKS_OK,
          payload: response.data,
        });
        return response.data;
      } else {
        throw Error();
      }
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Tracks load error',
      });
    }
  };
};
