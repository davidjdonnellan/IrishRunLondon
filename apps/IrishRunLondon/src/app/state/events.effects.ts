import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as EventsActions from './events.actions';

@Injectable()
export class EventsEffects {
  constructor(
    private actions$: Actions
  ) {}

  // Mock JSON data for events
  private  mockEvents = [
      { "event":"5K Run",
        "location":"Hyde Park Corner",
        "image":"hyde-park.png",
        "coordinates":"https://maps.app.goo.gl/bwv9CK4D8rY3xSPW6",
        "date":"02/04/2025",
        "time":"9:00am",
        "bagDrop":false,
        "description":"Meeting point at The Lodge cafe Hyde park corner for a casual 5k; Finishing at the serpintine cafe for a post run coffee and social"
      },
      { "event":"5K Run",
        "location":"London Irish Centre Camden",
        "image":"lic.jpg",
        "coordinates":"https://maps.app.goo.gl/xYLbUNMr6m4z9Mzx6",
        "date":"15/05/2025",
        "time":"18:30pm",
        "bagDrop":true,
        "description":"Meeting point at The London Irish Centre, Camden for a casual 5k to Primrose Hill and back; Finishing at the London Irish centre for a post run pint, with live trad music"
      },
      { "event":"Social",
        "location":"London Irish Centre Camden",
        "image":"guinness.jpeg",
        "coordinates":"https://maps.app.goo.gl/xYLbUNMr6m4z9Mzx6",
        "date":"15/05/2025",
        "time":"18:30pm",
        "bagDrop":false,
        "description":""
      },
        { 
        "event":"Social",
        "location":"London Irish Centre Camden",
        "image":"guinness.jpeg",
        "coordinates":"https://maps.app.goo.gl/xYLbUNMr6m4z9Mzx6",
        "date":"15/05/2025",
        "time":"18:30pm",
        "bagDrop":false,
        "description":""
      },

    ]


  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventsActions.loadEvents),
      switchMap(() =>
        // Replace the service call with the mock data
        of(this.mockEvents).pipe(
          map(events => EventsActions.loadEventsSuccess({ events })),
          catchError(error => of(EventsActions.loadEventsFailure({ error })))
        )
      )
    )
  );
}
