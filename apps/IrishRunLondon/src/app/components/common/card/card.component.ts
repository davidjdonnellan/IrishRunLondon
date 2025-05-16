import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';''

@Component({
  selector: 'card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() event:any
}
