import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalgsOrdreDetaljer } from 'src/app/interfaces/salgs-ordre-detaljer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SalgsOrdreDetaljerService {
  private apiUrl = 'http://192.168.20.30:8090/laane-ordre-detaljer';

  constructor(private http: HttpClient) { }

  getLaaneOrdreDetaljer(salgsOrdreDetaljer: SalgsOrdreDetaljer): Observable<SalgsOrdreDetaljer> {
    const url = `${this.apiUrl}/${salgsOrdreDetaljer.FK_ordreId}`;
    return this.http.get<SalgsOrdreDetaljer>(url);
  }

  addLaaneOrdreDetaljer(salgsOrdreDetaljer: SalgsOrdreDetaljer): Observable<SalgsOrdreDetaljer> {
    return this.http.post<SalgsOrdreDetaljer>(this.apiUrl, salgsOrdreDetaljer, httpOptions)
  }

  updateLaaneOrdreDetaljer(salgsOrdreDetaljer: SalgsOrdreDetaljer): Observable<SalgsOrdreDetaljer> {
    return this.http.patch<SalgsOrdreDetaljer>(this.apiUrl, salgsOrdreDetaljer, httpOptions)
  }
}
