import { TestBed } from '@angular/core/testing';

import { LaaneBillederService } from './laane-billeder.service';

describe('LaaneBillederService', () => {
  let service: LaaneBillederService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaaneBillederService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
