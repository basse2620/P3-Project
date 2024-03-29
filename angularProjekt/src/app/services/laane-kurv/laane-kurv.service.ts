import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { LaaneKurv } from 'src/app/interfaces/laane-kurv';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LaaneKurvService {
  private apiUrl = 'http://192.168.20.30:8090/laane-kurv';

  constructor(private http: HttpClient) { }

  getLaaneKurven(laaneKurv: LaaneKurv): Observable<LaaneKurv> {
    const url = `${this.apiUrl}/${laaneKurv.FK_kurvId}`;
    return this.http.get<LaaneKurv>(url);
  }

  addLaaneKurv(laaneKurv: LaaneKurv): Observable<LaaneKurv> {
    return this.http.post<LaaneKurv>(this.apiUrl, laaneKurv, httpOptions)
  }

  deleteLaaneKurv(laaneKurv: LaaneKurv): Observable<LaaneKurv> {
    const url = `${this.apiUrl}/${laaneKurv.FK_kurvId}`;
    return this.http.delete<LaaneKurv>(url);
  }
}