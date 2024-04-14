import { Component, Input } from '@angular/core';
import { HeroInterface } from '../../../interfaces/hero-interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input({ required: true }) hero?: HeroInterface | null;
  @Input() style?: { [key: string]: string };
}
