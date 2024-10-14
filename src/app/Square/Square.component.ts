import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, type OnInit } from '@angular/core';

@Component({
  selector: 'square',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Square.component.html',
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
