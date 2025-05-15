import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../common/card/card.component';

@Component({
  selector: 'app-events',
  imports: [CommonModule,CardComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
    events = [
      { "event":"5K Run",
        "location":"Hyde Park Corner",
        "image":"",
        "coordinates":"",
        "date":"02/04/2025",
        "time":"9:00am",
        "bagDrop":"false",
      },
      { "event":"5K Run",
        "location":"London Irish Centre Camden",
        "image":"",
        "coordinates":"",
        "date":"15/05/2025",
        "time":"18:30pm",
        "bagDrop":"true",
        "description":""
      },
      { "event":"Social",
        "location":"London Irish Centre Camden",
        "image":"",
        "coordinates":"",
        "date":"15/05/2025",
        "time":"18:30pm",
        "bagDrop":null,
        "description":""
      },

    ]
}
