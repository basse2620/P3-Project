import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../../interfaces/genre';
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
export class GenreService {
  private apiUrl = 'http://192.168.20.30:8090/genre';

  constructor(private http: HttpClient) { }

  getGenre(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.apiUrl);
  }

  getGenren(genre: Genre): Observable<Genre> {
    const url = `${this.apiUrl}/${genre.PK_genreId}`;
    return this.http.get<Genre>(url);
  }

  getGenreLaaneFilm(laaneFilm: LaaneFilm): Observable<Genre> {
    const url = `${this.apiUrl}/${laaneFilm.PK_filmId}`;
    return this.http.get<Genre>(url);
  }

  getGenreSalgsFilm(salgsFilm: SalgsFilm): Observable<Genre> {
    const url = `${this.apiUrl}/${salgsFilm.PK_filmId}`;
    return this.http.get<Genre>(url);
  }
}
