import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Kurv } from '../../interfaces/kurv';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class KurvService {
  private apiUrl = 'http://192.168.20.30:8090/kurv';

  constructor(private http: HttpClient) { }

  getKurv(kurv: Kurv): Observable<Kurv> {
    const url = `${this.apiUrl}/${kurv.FK_brugernavn}`;
    return this.http.get<Kurv>(url);
  }

  getKurven(kurv: Kurv) {
    let laaneKurv1 = this.http.get<l>(`${this.apiUrl}/${kurv.FK_brugernavn}`);
    let salgsKurv1 = 
  }

  getLaaneKurv(kurv: Kurv): Observable<Kurv> {
    const url = `${this.apiUrl}/laane/${kurv.FK_brugernavn}`;
    return this.http.get<Kurv>(url);
  }

  getSalgsKurv(kurv: Kurv): Observable<Kurv> {
    const url = `${this.apiUrl}/salgs/${kurv.FK_brugernavn}`;
    return this.http.get<Kurv>(url);
  }

  addKurv(kurv: Kurv): Observable<Kurv> {
    return this.http.post<Kurv>(this.apiUrl, kurv, httpOptions)
  }

  updateKurv(kurv: Kurv): Observable<Kurv> {
    return this.http.patch<Kurv>(this.apiUrl, kurv, httpOptions)
  }
}
