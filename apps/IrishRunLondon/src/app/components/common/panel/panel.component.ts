import { Component, Input } from '@angular/core';

@Component({
  selector: 'panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
    @Input() data: any; 
}
