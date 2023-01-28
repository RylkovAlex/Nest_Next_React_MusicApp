import { TrackAction, TrackActionTypes } from '@/types/ITrack';
import axios from 'axios';
import { Dispatch } from 'react';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      console.log({docker: `${process.env.DOCKER}`})
      const response = await axios.get(`${process.env.DOCKER ? process.env.NEXT_PUBLIC_DOCKER_API_URL : process.env.NEXT_PUBLIC_API_URL}/tracks`);
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
      console.log({error})
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Tracks load error',
      });
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/tracks/search?query=${query}`
      );
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
