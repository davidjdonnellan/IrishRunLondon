import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navigation',
  imports: [CommonModule, RouterModule],
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
    "href": '/gallery'
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
