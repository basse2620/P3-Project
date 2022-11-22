import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaaneOrdreDetaljer } from 'src/app/interfaces/laane-ordre-detaljer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LaaneOrdreDetaljerService {
  private apiUrl = 'http://192.168.20.30:8090/laane-ordre-detaljer';

  constructor(private http: HttpClient) { }

  getLaaneOrdreDetaljer(laaneOrdreDetaljer: LaaneOrdreDetaljer): Observable<LaaneOrdreDetaljer> {
    const url = `${this.apiUrl}/${laaneOrdreDetaljer.FK_ordreId}`;
    return this.http.get<LaaneOrdreDetaljer>(url);
  }

  addLaaneOrdreDetaljer(laaneOrdreDetaljer: LaaneOrdreDetaljer): Observable<LaaneOrdreDetaljer> {
    return this.http.post<LaaneOrdreDetaljer>(this.apiUrl, laaneOrdreDetaljer, httpOptions)
  }

  updateLaaneOrdreDetaljer(laaneOrdreDetaljer: LaaneOrdreDetaljer): Observable<LaaneOrdreDetaljer> {
    return this.http.patch<LaaneOrdreDetaljer>(this.apiUrl, laaneOrdreDetaljer, httpOptions)
  }
}
