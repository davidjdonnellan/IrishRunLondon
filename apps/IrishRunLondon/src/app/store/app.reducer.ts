import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(AppActions.increment, state => state + 1),
  on(AppActions.decrement, state => state - 1),
  on(AppActions.reset, _ => 0)
);
