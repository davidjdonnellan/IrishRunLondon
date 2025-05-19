import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as EventsActions from './events.actions';
import { EventsService } from '@irish-run-london/data-access/services';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions,
    private eventsService: EventsService
  ) {}

  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.loadEvents),
      switchMap(() =>
        this.eventsService.getEvents().pipe(
          map(events => EventsActions.loadEventsSuccess({ events })),
          catchError(error =>
            of(EventsActions.loadEventsFailure({ error }))
          )
        )
      )
    )
  );
}
