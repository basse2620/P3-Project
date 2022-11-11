import { TestBed } from '@angular/core/testing';

import { SalgsFilmService } from './salgs-film.service';

describe('SalgsFilmService', () => {
  let service: SalgsFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgsFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
