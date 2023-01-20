import { trackReducer } from './trackReducer';
import { playerReducer } from './playerReducer';
import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const clientReducer = combineReducers({
  player: playerReducer,
  track: trackReducer,
});

export const rootReducer = (state: RootState, action: AnyAction): RootState => {
  console.log(action.type);
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    } as RootState;
  } else {
    return clientReducer(state, action);
  }
};

export type RootState = ReturnType<typeof clientReducer>;
