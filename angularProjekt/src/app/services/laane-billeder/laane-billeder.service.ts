import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaaneBilledere } from '../../interfaces/laane-billedere';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LaaneBillederService {
  private apiUrl = 'http://192.168.20.30:8090/laane-billeder';

  constructor(private http: HttpClient) { }

  getLaaneBilleder(): Observable<LaaneBilledere[]> {
    return this.http.get<LaaneBilledere[]>(this.apiUrl)
  }

  getLaaneBilled(laaneBilledere: LaaneBilledere): Observable<LaaneBilledere> {
    const url = `${this.apiUrl}/${laaneBilledere.FK_filmId}`;
    return this.http.get<LaaneBilledere>(url);
  }

  addLaaneBilledere(laaneBilledere: LaaneBilledere): Observable<LaaneBilledere> {
    return this.http.post<LaaneBilledere>(this.apiUrl, laaneBilledere, httpOptions)
  }
}
