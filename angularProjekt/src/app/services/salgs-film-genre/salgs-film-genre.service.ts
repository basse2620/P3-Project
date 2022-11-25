import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalgsFilmGenre } from 'src/app/interfaces/salgs-film-genre';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SalgsFilmGenreService {
  private apiUrl = 'http://192.168.20.30:8090/salgs-film-genre';

  constructor(private http: HttpClient) { }

  addSalgsFilmGenre(salgsFilmGenre: SalgsFilmGenre): Observable<SalgsFilmGenre> {
    return this.http.post<SalgsFilmGenre>(this.apiUrl, salgsFilmGenre, httpOptions)
  }
}
