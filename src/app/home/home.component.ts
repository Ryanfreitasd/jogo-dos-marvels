import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  logo: string = 'assets/Marvel.png';

  onStartGame() {
    console.log('START');
  }
}
