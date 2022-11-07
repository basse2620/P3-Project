import { TestBed } from '@angular/core/testing';

import { OrdreService } from './ordre.service';

describe('OrdreService', () => {
  let service: OrdreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
