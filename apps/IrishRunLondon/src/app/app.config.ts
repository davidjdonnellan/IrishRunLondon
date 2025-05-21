import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { eventsReducer } from './state/events.reducer';
import { EventsEffects } from './state/events.effects';
import { mockHttpInterceptor } from '@irish-run-london/interceptors';


export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([mockHttpInterceptor])),
    provideStore({ events: eventsReducer }),
    provideEffects([EventsEffects]),
    provideStoreDevtools(),
  ],
};


