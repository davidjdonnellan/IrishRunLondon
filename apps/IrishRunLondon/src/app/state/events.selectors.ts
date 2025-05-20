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

export const selectUpcomingEvents = createSelector(
  selectAllEvents,
  (events: Events[]) => {
    const today = new Date();

    return events.filter(event => {
      const [day, month, year] = event.date.split('/').map(Number);
      const eventDate = new Date(year, month - 1, day);
      console.log(eventDate)
      return eventDate >= today;
    });
  }
);