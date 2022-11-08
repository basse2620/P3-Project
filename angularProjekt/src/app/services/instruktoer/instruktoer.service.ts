import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instruktoer } from '../../interfaces/instruktoer';
import { LaaneFilm } from '../../interfaces/laane-film';
import { SalgsFilm } from '../../interfaces/salgs-film';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class InstruktoerService {
  private apiUrl = 'http://192.168.20.30:8090/instruktoer';

  constructor(private http: HttpClient) { }

  getInstruktoer(): Observable<Instruktoer[]> {
    return this.http.get<Instruktoer[]>(this.apiUrl);
  }

  getInstruktoerId(instruktoer: Instruktoer): Observable<Instruktoer> {
    const url = `${this.apiUrl}/${instruktoer.PK_instruktoerId}`;
    return this.http.get<Instruktoer>(url);
  }

  getInstruktoerLaaneFilm(laaneFilm: LaaneFilm): Observable<Instruktoer> {
    const url = `${this.apiUrl}/${laaneFilm.PK_filmId}`;
    return this.http.get<Instruktoer>(url);
  }

  getInstruktoerSalgsFilm(salgsFilm: SalgsFilm): Observable<Instruktoer> {
    const url = `${this.apiUrl}/${salgsFilm.PK_filmId}`;
    return this.http.get<Instruktoer>(url);
  }
}