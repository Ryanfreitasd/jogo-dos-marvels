import { Component } from '@angular/core';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(readonly signalService: SignalService) {}
  logo: string = 'assets/Marvel.png';

  isDisabled = this.signalService.isDisabled();

  async onStartGame() {
    alert('começou o jogo');
  }
}
