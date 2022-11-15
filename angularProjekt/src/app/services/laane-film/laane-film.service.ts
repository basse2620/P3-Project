import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, tap } from 'rxjs';
import { LaaneFilm } from '../../interfaces/laane-film';
import { LaaneFilmGenre } from 'src/app/interfaces/laane-film-genre';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LaaneFilmService {
  private apiUrl = 'http://192.168.20.30:8090/laane-film';

  constructor(private http: HttpClient) { }

  getLaaneFilm(): Observable<LaaneFilm[]> {
    return this.http.get<LaaneFilm[]>(this.apiUrl)
  }

  getLaaneFilmen(laaneFilm: LaaneFilm): Observable<LaaneFilm> {
    const url = `${this.apiUrl}/${laaneFilm.PK_filmId}`;
    return this.http.get<LaaneFilm>(url);
  }

  Test(laaneFilm: LaaneFilm, laaneFilmGenre: LaaneFilmGenre) {
    forkJoin([
      this.http.get(`${this.apiUrl}/${laaneFilm.PK_filmId}`).pipe(tap(film => laaneFilm)),
      this.http.get(``)
    ])

  }

  addLaaneBilledere(laaneFilm: LaaneFilm): Observable<LaaneFilm> {
    return this.http.post<LaaneFilm>(this.apiUrl, laaneFilm, httpOptions)
  }
}
