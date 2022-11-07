import { TestBed } from '@angular/core/testing';

import { InstruktoerService } from './instruktoer.service';

describe('InstruktoerService', () => {
  let service: InstruktoerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstruktoerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
