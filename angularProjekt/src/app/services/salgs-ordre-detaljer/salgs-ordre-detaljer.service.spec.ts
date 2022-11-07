import { TestBed } from '@angular/core/testing';

import { SalgsOrdreDetaljerService } from './salgs-ordre-detaljer.service';

describe('SalgsOrdreDetaljerService', () => {
  let service: SalgsOrdreDetaljerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalgsOrdreDetaljerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
