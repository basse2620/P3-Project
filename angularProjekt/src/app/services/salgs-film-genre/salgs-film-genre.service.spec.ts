import { TestBed } from '@angular/core/testing';

import { SalgsFilmGenreService } from './salgs-film-genre.service';

describe('SalgsFilmGenreService', () => {
  let service: SalgsFilmGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgsFilmGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
