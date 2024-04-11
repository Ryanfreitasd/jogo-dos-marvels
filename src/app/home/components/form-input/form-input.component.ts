import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input({ required: true }) fieldName: string;
  @Input({ required: true }) fieldPlaceholder: string;
  @Output() valueChange = new EventEmitter<string>();

  formControl: FormControl = new FormControl('', Validators.required);

  constructor() {
    this.fieldName = '';
    this.fieldPlaceholder = '';
  }

  get value(): string {
    return this.formControl.value;
  }

  set value(val: string) {
    this.formControl.setValue(val);
    this.valueChange.emit(val);
  }
}
