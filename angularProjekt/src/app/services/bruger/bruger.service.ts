import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bruger } from '../../interfaces/bruger';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class BrugerService {
  private apiUrl = 'http://192.168.20.30:8090/bruger';

  constructor(private http: HttpClient) { }

  getBrugere(): Observable<Bruger[]> {
    return this.http.get<Bruger[]>(this.apiUrl);
  }

  getBruger(bruger: Bruger): Observable<Bruger> {
    const url = `${this.apiUrl}/${bruger.PK_brugernavn}/${bruger.password}`;
    return this.http.get<Bruger>(url);
  }

  postBruger(bruger: Bruger): Observable<Bruger> {
    return this.http.post<Bruger>(this.apiUrl, bruger, httpOptions);
  }

  patchBruger(bruger: Bruger): Observable<Bruger> {
    return this.http.post<Bruger>(this.apiUrl, bruger, httpOptions)
  }
}
