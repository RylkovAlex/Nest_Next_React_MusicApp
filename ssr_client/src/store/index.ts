import { rootReducer, RootState } from './reducers/index';
import { configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { Store, AnyAction } from 'redux';
import { createWrapper, Context } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

// create a makeStore function
const makeStore = (context: Context) =>
  configureStore({
    // @ts-ignore TODO:
    reducer: rootReducer,
    devTools: true, //TODO:
    middleware: [thunkMiddleware],
  });

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
