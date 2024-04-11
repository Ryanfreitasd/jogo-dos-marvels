import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [HomeComponent, FormInputComponent, ButtonComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
