import { TestBed } from '@angular/core/testing';

import { GlobalHandlerErrorService } from './global-handler-error.service';

describe('GlobalHandlerErrorService', () => {
  let service: GlobalHandlerErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalHandlerErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
