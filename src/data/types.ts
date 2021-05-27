import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { SessionStates } from './session/types';

export interface RootStates {
  session: SessionStates;
}

export type ActionDispatcher = ThunkDispatch<RootStates, unknown, AnyAction>;

export type AsyncAction<R = Promise<void>> = ThunkAction<
  R,
  RootStates,
  unknown,
  AnyAction
>;

export type SimpleAction<R = void> = ThunkAction<
  R,
  RootStates,
  unknown,
  AnyAction
>;
