import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component'

@Component({
  imports: [NavigationComponent, RouterModule, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Irish Running London';
}
