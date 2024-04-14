import { Injectable, signal, computed } from '@angular/core';
import { HeroInterface } from '../../interfaces/hero-interface';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  character1 = signal<HeroInterface | null>(null);
  character2 = signal<HeroInterface | null>(null);
  player1Score = signal<number>(0);
  player2Score = signal<number>(0);
  firstPlay = signal<boolean>(true);
  isStartGame = signal<boolean>(false);
  winner = signal<string | null>(null);
  squares = signal(Array(9).fill(null));

  isDisabled = computed(() => {
    if (this.character1() && this.character2()) {
      return false;
    } else {
      return true;
    }
  });

  nextPlayer = computed(() => {
    if (this.firstPlay()) {
      return this.character1()?.name;
    } else {
      return this.character2()?.name;
    }
  });

  showWinnerName = computed(() => {
    if (this.winner() === 'X') {
      return this.character1()?.name;
    } else if (this.winner() === 'O') {
      return this.character2()?.name;
    }
    return null;
  });

  calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const player = squares[a];
      if (player && player === squares[b] && player === squares[c]) {
        return player;
      }
    }

    let isTie = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isTie = false;
        break;
      }
    }

    return isTie ? 'Tie' : null;
  }

  onStartGame() {
    const initGame = Math.floor(Math.random() * 100);
    if (initGame % 2 === 0) {
      this.firstPlay.set(true);
    } else {
      this.firstPlay.set(false);
    }

    this.isStartGame.set(true);
  }

  reset() {
    this.character1.set(null);
    this.character2.set(null);
    this.firstPlay.set(true);
    this.isStartGame.set(false);
    this.squares.set(Array(9).fill(null));
    this.winner.set(null);
    this.player1Score.set(0);
    this.player2Score.set(0);
  }

  newMatch() {
    this.squares.set(Array(9).fill(null));
    this.winner.set(null);
    this.onStartGame();
  }
}
