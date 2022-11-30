import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalgsKurv } from 'src/app/interfaces/salgs-kurv';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SalgsKurvService {
  private apiUrl = 'http://192.168.20.30:8090/salgs-kurv';

  constructor(private http: HttpClient) { }

  getSalgsKurv(salgsKurv: SalgsKurv): Observable<SalgsKurv> {
    const url = `${this.apiUrl}/${salgsKurv.FK_kurvId}`;
    return this.http.get<SalgsKurv>(url);
  }

  addSalgsKurv(salgsKurv: SalgsKurv): Observable<SalgsKurv> {
    return this.http.post<SalgsKurv>(this.apiUrl, salgsKurv, httpOptions)
  }

  deleteSalgsKurv(salgsKurv: SalgsKurv): Observable<SalgsKurv> {
    const url = `${this.apiUrl}/${salgsKurv.FK_kurvId}`;
    return this.http.delete<SalgsKurv>(url);
  }
}
