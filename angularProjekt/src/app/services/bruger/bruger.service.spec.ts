import { TestBed } from '@angular/core/testing';

import { BrugerService } from './bruger.service';

describe('BrugerService', () => {
  let service: BrugerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrugerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
