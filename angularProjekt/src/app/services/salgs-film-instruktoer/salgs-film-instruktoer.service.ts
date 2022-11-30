import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalgsFilmInstruktoer } from 'src/app/interfaces/salgs-film-instruktoer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SalgsFilmInstruktoerService {
  private apiUrl = 'http://192.168.20.30:8090/salgs-film-instruktoer';

  constructor(private http: HttpClient) { }

  addSalgsFilmGenre(salgsFilmInstruktoer: SalgsFilmInstruktoer): Observable<SalgsFilmInstruktoer> {
    return this.http.post<SalgsFilmInstruktoer>(this.apiUrl, salgsFilmInstruktoer, httpOptions)
  }
}
