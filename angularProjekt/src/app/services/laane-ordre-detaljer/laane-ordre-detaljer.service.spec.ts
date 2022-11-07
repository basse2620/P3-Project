import { TestBed } from '@angular/core/testing';

import { LaaneOrdreDetaljerService } from './laane-ordre-detaljer.service';

describe('LaaneOrdreDetaljerService', () => {
  let service: LaaneOrdreDetaljerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaaneOrdreDetaljerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
