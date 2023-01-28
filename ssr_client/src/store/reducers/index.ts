import { trackReducer } from './trackReducer';
import { playerReducer } from './playerReducer';
import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const clientReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
});

export const rootReducer = (state: RootState, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
      player: { ...state.player }, //hydration shouldn't change player state
    } as RootState;
  } else {
    return clientReducer(state, action);
  }
};

export type RootState = ReturnType<typeof clientReducer>;
