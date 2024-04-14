import { Component, Input, WritableSignal } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { HeroInterface } from '../../../interfaces/hero-interface';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input({ required: true }) fieldName: string;
  @Input({ required: true }) fieldPlaceholder: string;
  @Input() heroSelected?: WritableSignal<HeroInterface | null>;

  formControl: FormControl = new FormControl('', Validators.required);

  constructor(private readonly service: HomeService) {
    this.fieldName = '';
    this.fieldPlaceholder = '';
  }

  search() {
    this.service.getHeroName(this.formControl.value).subscribe((response) => {
      if (response.code === 200 && response.data!.results.length > 0) {
        this.heroSelected?.set(response.data!.results[0]);
        this.formControl.setValue('');
      } else {
        this.formControl.setValue('');
        alert('Herói não encontrado');
      }
    });
  }
}
