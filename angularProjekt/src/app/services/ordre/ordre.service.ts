import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Ordre } from 'src/app/interfaces/ordre';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class OrdreService {
  private apiUrl = 'http://192.168.20.30:8090/ordre';

  constructor(private http: HttpClient) { }

  getKurven(ordre: Ordre) {
    forkJoin([
      this.http.get<Ordre>(`${this.apiUrl}/${ordre.FK_brugernavn}`),
      this.http.get<LaaneOrdreSam>(`${this.apiUrl}/${ordre.FK_brugernavn}`),
      this.http.get<SalgsOrdreSam>(`${this.apiUrl}/${ordre.FK_brugernavn}`),
    ]).subscribe(
      ([
        ordre,
        laaneOrdreSam,
        salgsOrdreSam
      ]) => {
        ordre;
        laaneOrdreSam;
        salgsOrdreSam;
      }
    )
  }
}