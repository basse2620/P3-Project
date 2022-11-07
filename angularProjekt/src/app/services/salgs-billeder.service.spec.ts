import { TestBed } from '@angular/core/testing';

import { SalgsBillederService } from './salgs-billeder.service';

describe('SalgsBillederService', () => {
  let service: SalgsBillederService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgsBillederService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
