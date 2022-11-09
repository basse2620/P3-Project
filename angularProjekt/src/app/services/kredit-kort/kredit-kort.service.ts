import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KreditKort } from '../../interfaces/kredit-kort';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class KreditKortService {
  private apiUrl = 'http://192.168.20.30:8090/kredit-kort';

  constructor(private http: HttpClient) { }

  getKreditKort(kreditKort: KreditKort): Observable<KreditKort> {
    const url = `${this.apiUrl}/${kreditKort.PK_kortNr}/${kreditKort.cvc}`;
    return this.http.get<KreditKort>(url);
  }

  addKreditKort(kreditKort: KreditKort): Observable<KreditKort> {
    return this.http.post<KreditKort>(this.apiUrl, kreditKort, httpOptions)
  }

  updateKreditKort(kreditKort: KreditKort): Observable<KreditKort> {
    return this.http.patch<KreditKort>(this.apiUrl, kreditKort, httpOptions)
  }
}
