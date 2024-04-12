import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeService } from './services/home.service';
import { provideHttpClient } from '@angular/common/http';
import { HeroComponent } from './components/hero/hero.component';
import { SignalService } from './services/signal.service';

@NgModule({
  declarations: [
    HomeComponent,
    FormInputComponent,
    ButtonComponent,
    HeroComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient(), HomeService, SignalService],
})
export class HomeModule {}
