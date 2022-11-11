import { TestBed } from '@angular/core/testing';

import { KreditKortService } from './kredit-kort.service';

describe('KreditKortService', () => {
  let service: KreditKortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KreditKortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
