import { TestBed } from '@angular/core/testing';

import { LaaneFilmInstruktoerService } from './laane-film-instruktoer.service';

describe('LaaneFilmInstruktoerService', () => {
  let service: LaaneFilmInstruktoerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaaneFilmInstruktoerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
