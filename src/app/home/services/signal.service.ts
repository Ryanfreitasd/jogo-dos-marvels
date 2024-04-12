import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  isPlayer1 = signal<boolean>(false);
  isPlayer2 = signal<boolean>(false);
  isDisabled = computed(() => {
    if (this.isPlayer1() && this.isPlayer2()) {
      return false;
    } else {
      return true;
    }
  });

  constructor() {}
}
