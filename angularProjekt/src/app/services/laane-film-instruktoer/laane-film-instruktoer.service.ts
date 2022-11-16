import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaaneFilmInstruktoer } from 'src/app/interfaces/laane-film-instruktoer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LaaneFilmInstruktoerService {
  private apiUrl = 'http://192.168.20.30:8090/laane-film-instruktoer';

  constructor(private http: HttpClient) { }

  addLaaneFilmGenre(laaneFilmInstruktoer: LaaneFilmInstruktoer): Observable<LaaneFilmInstruktoer> {
    return this.http.post<LaaneFilmInstruktoer>(this.apiUrl, laaneFilmInstruktoer, httpOptions)
  }
}
