import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalgsBilledere } from '../../interfaces/salgs-billedere';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SalgsBillederService {
  private apiUrl = 'http://192.168.20.30:8090/sagls-billeder';

  constructor(private http: HttpClient) { }

  getSaglsBilleder(): Observable<SalgsBilledere[]> {
    return this.http.get<SalgsBilledere[]>(this.apiUrl)
  }

  getSalgsBilled(salgsBilledere: SalgsBilledere): Observable<SalgsBilledere> {
    const url = `${this.apiUrl}/${salgsBilledere.FK_filmId}`;
    return this.http.get<SalgsBilledere>(url);
  }

  addSalgsBilledere(salgsBilledere: SalgsBilledere): Observable<SalgsBilledere> {
    return this.http.post<SalgsBilledere>(this.apiUrl, salgsBilledere, httpOptions)
  }
}
