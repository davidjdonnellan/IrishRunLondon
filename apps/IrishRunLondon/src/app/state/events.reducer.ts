// apps/your-app/src/app/state/users.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as EventsActions from './events.actions';
import { Events } from '@irish-run-london/data-access/models';

export interface EventsState {
  events: Events[];
  loading: boolean;
  error: any;
}

export const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

// Correct export
export const eventsReducer = createReducer(

  initialState,
  on(EventsActions.loadEvents, state => ({ ...state, loading: true })),
  on(EventsActions.loadEventsSuccess, (state, { events }) => ({
    ...state,
    events,
    loading: false,
  })),
  on(EventsActions.loadEventsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
