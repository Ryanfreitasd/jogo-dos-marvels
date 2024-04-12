import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalHandlerErrorService } from './global-handler-error.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalHandlerErrorService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
