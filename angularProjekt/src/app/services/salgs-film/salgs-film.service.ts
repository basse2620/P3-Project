import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalgsFilm } from 'src/app/interfaces/salgs-film';
import { SalgsFilmGenreSam } from 'src/app/interfaces/salgs-film-genre-sam';
import { SalgsFilmInstruktoerSam } from 'src/app/interfaces/salgs-film-instruktoer-sam';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SalgsFilmService {
  private apiUrl = 'http://192.168.20.30:8090/salgs-film';

  constructor(private http: HttpClient) { }

  getSalgsFilm(): Observable<SalgsFilm[]> {
    return this.http.get<SalgsFilm[]>(this.apiUrl)
  }

  getSalgsFilmen(salgsFilm: SalgsFilm): Observable<SalgsFilm> {
    const url = `${this.apiUrl}/${salgsFilm.PK_filmId}`;
    return this.http.get<SalgsFilm>(url);
  }

  getSalgsFilmGenre(salgsFilmGenreSam: SalgsFilmGenreSam): Observable<SalgsFilm> {
    const url = `${this.apiUrl}/genre/${salgsFilmGenreSam.PK_genreId}`;
    return this.http.get<SalgsFilm>(url);
  }

  getSalgsFilmInstruktoer(salgsFilmInstruktoerSam: SalgsFilmInstruktoerSam): Observable<SalgsFilm> {
    const url = `${this.apiUrl}/genre/${salgsFilmInstruktoerSam.PK_instruktoerId}`;
    return this.http.get<SalgsFilm>(url);
  }

  addSalgsFilm(salgsFilm: SalgsFilm): Observable<SalgsFilm> {
    return this.http.post<SalgsFilm>(this.apiUrl, salgsFilm, httpOptions)
  }
}
