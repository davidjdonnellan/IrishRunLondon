import { Route } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { GalleryComponent } from './components/views/gallery/gallery.component';
import { EventsComponent } from './components/views/events/events.component';
import { ContactUsComponent } from './components/views/contact-us/contact-us.component';
import { AboutComponent } from './components/views/about/about.component';


export const appRoutes: Route[] = [
     {path: '', component: HomeComponent, data: { animation: 'HomePage' } },
     {path: 'events', component: EventsComponent , data: { animation: 'EventPage' }},
     {path: 'gallery', component: GalleryComponent, data: { animation: 'GalleryPage' } },
     {path: 'contactus', component: ContactUsComponent, data: { animation: 'ContactUsPage' } },
     {path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },
];
