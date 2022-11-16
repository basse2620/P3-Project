import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, tap } from 'rxjs';
import { LaaneFilm } from '../../interfaces/laane-film';
import { LaaneFilmGenreSam } from 'src/app/interfaces/laane-film-genre-sam';
import { LaaneFilmInstruktoerSam } from 'src/app/interfaces/laane-film-instruktoer-sam';

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

  getLaaneFilmGenre(laaneFilmGenreSam: LaaneFilmGenreSam): Observable<LaaneFilm> {
    const url = `${this.apiUrl}/genre/${laaneFilmGenreSam.PK_genreId}`;
    return this.http.get<LaaneFilm>(url);
  }

  getLaaneFilmInstruktoer(LaaneFilmInstruktoerSam: LaaneFilmInstruktoerSam): Observable<LaaneFilm> {
    const url = `${this.apiUrl}/genre/${LaaneFilmInstruktoerSam.PK_instruktoerId}`;
    return this.http.get<LaaneFilm>(url);
  }

  addLaaneFilm(laaneFilm: LaaneFilm): Observable<LaaneFilm> {
    return this.http.post<LaaneFilm>(this.apiUrl, laaneFilm, httpOptions)
  }
}
