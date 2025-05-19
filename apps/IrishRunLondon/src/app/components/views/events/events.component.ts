import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../common/card/card.component';
import { Store } from '@ngrx/store';
import { loadEvents } from '../../../state/events.actions';
import { Observable } from 'rxjs';
import { selectAllEvents, selectEventsLoading } from '../../../state/events.selectors';

@Component({
  selector: 'app-events',
  imports: [CommonModule,CardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent  implements OnInit {
  events$!: Observable<any[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.events$ = this.store.select(selectAllEvents);
    this.loading$ = this.store.select(selectEventsLoading);
    this.store.dispatch(loadEvents());
  }
}

    // events = [
    //   { "event":"5K Run",
    //     "location":"Hyde Park Corner",
    //     "image":"hyde-park.png",
    //     "coordinates":"https://maps.app.goo.gl/bwv9CK4D8rY3xSPW6",
    //     "date":"02/04/2025",
    //     "time":"9:00am",
    //     "bagDrop":false,
    //     "description":"Meeting point at The Lodge cafe Hyde park corner for a casual 5k; Finishing at the serpintine cafe for a post run coffee and social"
    //   },
    //   { "event":"5K Run",
    //     "location":"London Irish Centre Camden",
    //     "image":"lic.jpg",
    //     "coordinates":"https://maps.app.goo.gl/xYLbUNMr6m4z9Mzx6",
    //     "date":"15/05/2025",
    //     "time":"18:30pm",
    //     "bagDrop":true,
    //     "description":"Meeting point at The London Irish Centre, Camden for a casual 5k to Primrose Hill and back; Finishing at the London Irish centre for a post run pint, with live trad music"
    //   },
    //   { "event":"Social",
    //     "location":"London Irish Centre Camden",
    //     "image":"guinness.jpeg",
    //     "coordinates":"https://maps.app.goo.gl/xYLbUNMr6m4z9Mzx6",
    //     "date":"15/05/2025",
    //     "time":"18:30pm",
    //     "bagDrop":false,
    //     "description":""
    //   },
    //     { "event":"Social",
    //     "location":"London Irish Centre Camden",
    //     "image":"guinness.jpeg",
    //     "coordinates":"https://maps.app.goo.gl/xYLbUNMr6m4z9Mzx6",
    //     "date":"15/05/2025",
    //     "time":"18:30pm",
    //     "bagDrop":false,
    //     "description":""
    //   },

    // ]

