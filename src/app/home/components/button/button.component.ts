import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) buttonLabel: string;
  @Input() type?: string;
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<Function>();

  constructor() {
    this.buttonLabel = '';
  }
}
