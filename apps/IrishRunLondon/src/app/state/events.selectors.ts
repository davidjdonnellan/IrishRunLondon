// apps/your-app/src/app/state/users.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState } from './events.reducer';
import { Events } from '@irish-run-london/data-access';

export const selectEventsState = createFeatureSelector<EventsState>('events');

export const selectAllEvents = createSelector(
  selectEventsState,
  state => state.events
);

export const selectEventsLoading = createSelector(
  selectEventsState,
  state => state.loading
);


export const selectEventsAfterDate = (date: Date) =>
  createSelector(selectAllEvents, (items: Events[]) =>
    items.filter(item => new Date(item.date) > date)
  );