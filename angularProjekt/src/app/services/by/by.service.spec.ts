import { TestBed } from '@angular/core/testing';

import { ByService } from './by.service';

describe('ByService', () => {
  let service: ByService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
