import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './events.reducer';

export interface AppState {
  count: number;
}

export const reducers: ActionReducerMap<AppState> = {
  count: counterReducer
};
