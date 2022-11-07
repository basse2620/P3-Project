import { TestBed } from '@angular/core/testing';

import { SalgsKurvService } from './salgs-kurv.service';

describe('SalgsKurvService', () => {
  let service: SalgsKurvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgsKurvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
