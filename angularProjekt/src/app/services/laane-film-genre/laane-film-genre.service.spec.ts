import { TestBed } from '@angular/core/testing';

import { LaaneFilmGenreService } from './laane-film-genre.service';

describe('LaaneFilmGenreService', () => {
  let service: LaaneFilmGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaaneFilmGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
