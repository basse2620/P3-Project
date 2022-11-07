import { TestBed } from '@angular/core/testing';

import { LaaneKurvService } from './laane-kurv.service';

describe('LaaneKurvService', () => {
  let service: LaaneKurvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaaneKurvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
