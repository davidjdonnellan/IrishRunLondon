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

