import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquareComponent } from "./Square/Square.component";
import { BoardComponent } from "./Board/Board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SquareComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
}
