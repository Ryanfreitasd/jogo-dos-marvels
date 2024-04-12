import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HeroInterface } from '../../../interfaces/hero-interface';
import { HomeService } from '../../services/home.service';
import { catchError, of } from 'rxjs';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input({ required: true }) fieldName: string;
  @Input({ required: true }) fieldPlaceholder: string;
  @Input() items?: Array<HeroInterface>;
  @Output() valueChange = new EventEmitter<string>();

  formControl: FormControl = new FormControl('', Validators.required);
  hero?: HeroInterface;
  isHero = signal(false);

  constructor(
    private readonly service: HomeService,
    private readonly signalService: SignalService
  ) {
    this.fieldName = '';
    this.fieldPlaceholder = '';
  }

  search() {
    this.service.getHeroName(this.formControl.value).subscribe((response) => {
      if (response.code === 200 && response.data!.results.length > 0) {
        this.hero = response.data?.results[0];
        this.isHero.set(true);
        if (this.fieldName === 'Character 1') {
          this.signalService.isPlayer1.set(true);
        } else {
          this.signalService.isPlayer2.set(true);
        }
      } else {
        this.isHero.set(false);
        this.formControl.setValue('');
        alert('Herói não encontrado');
      }
    });
  }
}
