import { TestBed } from '@angular/core/testing';

import { BrugerTypeService } from './bruger-type.service';

describe('BrugerTypeService', () => {
  let service: BrugerTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrugerTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
