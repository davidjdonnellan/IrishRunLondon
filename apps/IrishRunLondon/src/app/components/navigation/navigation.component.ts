import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navigation',
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navItems = [{
    "title": "Home",
    "href": '/'
  },
  {
    "title": "Gallery",
    "href": '/gallary'
  },
  {
    "title": "Events",
    "href": '/events'
  }, {
    "title": "Contact",
    "href": '/contactus'
  },
  ]
}
