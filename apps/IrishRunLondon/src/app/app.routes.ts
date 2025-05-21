import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { GalleryComponent } from './components/views/gallery/gallery.component';
import { EventsComponent } from './components/views/events/events.component';
import { ContactUsComponent } from './components/views/contact-us/contact-us.component';
import { AboutComponent } from './components/views/about/about.component';


export const appRoutes: Route[] = [
     {path: '', component: HomeComponent },
     {path: 'events', component: EventsComponent },
     {path: 'gallery', component: GalleryComponent },
     {path: 'contactus', component: ContactUsComponent },
     {path: 'about', component: AboutComponent },
];
