import { Component, ElementRef, HostListener, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'navigation',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {

 isMenuOpen = signal(false);
 @ViewChild('dropdownRef', { static: true }) dropdownRef!: ElementRef;
  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
   // Listen to all clicks on the document
   @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.dropdownRef.nativeElement.contains(event.target)) {
      this.isMenuOpen.update(v =>false);
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
  },
  {
    "title": "About",
    "href": '/about'
  }, {
    "title": "Join us",
    "href": '/contactus'
  }
  ]
}
