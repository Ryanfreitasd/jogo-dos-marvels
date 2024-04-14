import { TestBed } from '@angular/core/testing';

import { SignalService } from './signal.service';

describe('SignalService', () => {
  let service: SignalService;
  let mockSquare = ['X', 'X', 'X', '', '', '', '', '', ''];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#calculateWinner should be return if winner', () => {
    const winner = service.calculateWinner(mockSquare);
    expect(winner).toBe('X');
  });
});
