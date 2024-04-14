import { SignalService } from './../../services/signal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  constructor(readonly signalService: SignalService) {}

  onClickSquare(index: number) {
    if (!this.signalService.winner() && !this.signalService.squares()[index]) {
      const nextSquare = this.signalService.squares().slice();

      if (this.signalService.firstPlay()) {
        nextSquare[index] = 'X';
      } else {
        nextSquare[index] = 'O';
      }

      this.signalService.squares.update(() => nextSquare);
      this.signalService.firstPlay.set(!this.signalService.firstPlay());
    } else {
      return;
    }
    this.signalService.winner.set(
      this.signalService.calculateWinner(this.signalService.squares())
    );

    if (this.signalService.winner() === 'X') {
      this.signalService.player1Score.update(
        () => this.signalService.player1Score() + 1
      );
    } else if (this.signalService.winner() === 'O') {
      this.signalService.player2Score.update(
        () => this.signalService.player2Score() + 1
      );
    }
  }
}
