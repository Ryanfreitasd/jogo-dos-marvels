import { Component, Input } from '@angular/core';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss',
})
export class ScoreboardComponent {
  constructor(readonly signalService: SignalService) {}
}
