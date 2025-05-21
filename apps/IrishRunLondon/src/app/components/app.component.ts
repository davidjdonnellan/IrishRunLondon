import { Component } from '@angular/core';
import { RouterModule,RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component'
import {
  trigger, transition, style, animate, query, group
} from '@angular/animations';

@Component({
  imports: [NavigationComponent, RouterModule, FooterComponent,RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
   animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('1500ms ease-in-out', style({ opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ opacity: 0 }),
            animate('1500ms ease-in-out', style({ opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Irish Running London';
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] || '';
  }
}
