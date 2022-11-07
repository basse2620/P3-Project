import { TestBed } from '@angular/core/testing';

import { SalgsFilmInstruktoerService } from './salgs-film-instruktoer.service';

describe('SalgsFilmInstruktoerService', () => {
  let service: SalgsFilmInstruktoerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgsFilmInstruktoerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
