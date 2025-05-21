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

    return events
  .filter(event => {
    const [day, month, year] = event.date.split('/').map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= today; // Filter events that are not in the past
  })
  .sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number);
    const [dayB, monthB, yearB] = b.date.split('/').map(Number);

    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);

    // Sorting in ascending order (oldest first)
    return dateA.getTime() - dateB.getTime(); // dateA - dateB for ascending
  });
  }
);