import { TestBed } from '@angular/core/testing';

import { LaaneFilmService } from './laane-film.service';

describe('LaaneFilmService', () => {
  let service: LaaneFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaaneFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
