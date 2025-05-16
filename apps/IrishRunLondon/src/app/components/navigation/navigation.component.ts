import { Component, ElementRef, HostListener, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

 isMenuOpen = false;
 @ViewChild('dropdownRef', { static: true }) dropdownRef!: ElementRef;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
   // Listen to all clicks on the document
   @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.dropdownRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }
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
