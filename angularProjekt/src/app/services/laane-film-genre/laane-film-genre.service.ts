import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaaneFilmGenre } from 'src/app/interfaces/laane-film-genre';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LaaneFilmGenreService {
  private apiUrl = 'http://192.168.20.30:8090/laane-film-genre';

  constructor(private http: HttpClient) { }

  addLaaneFilmGenre(laaneFilmGenre: LaaneFilmGenre): Observable<LaaneFilmGenre> {
    return this.http.post<LaaneFilmGenre>(this.apiUrl, laaneFilmGenre, httpOptions)
  }
}
