import { TestBed } from '@angular/core/testing';

import { KurvService } from './kurv.service';

describe('KurvService', () => {
  let service: KurvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KurvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
