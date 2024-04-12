import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalHandlerErrorService implements ErrorHandler {
  handleError(error: any): void {
    throw new Error('Method not implemented.');
  }
}
