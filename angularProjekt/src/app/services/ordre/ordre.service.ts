import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Ordre } from 'src/app/interfaces/ordre';
import { SalgsOrdreDetaljer } from 'src/app/interfaces/salgs-ordre-detaljer';
import { LaaneOrdreDetaljer } from 'src/app/interfaces/laane-ordre-detaljer';

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

  getOrdre(): Observable<Ordre[]> {
    return this.http.get<Ordre[]>(this.apiUrl);
  }

  getOrdren(ordre: Ordre) {
    forkJoin([
      this.http.get<Ordre>(`${this.apiUrl}/${ordre.FK_brugernavn}`),
      this.http.get<LaaneOrdreDetaljer>(`${this.apiUrl}/laane/${ordre.FK_brugernavn}`),
      this.http.get<SalgsOrdreDetaljer>(`${this.apiUrl}/salgs/${ordre.FK_brugernavn}`),
    ]).subscribe(
      ([
        ordre,
        laaneOrdre,
        salgsOrdre
      ]) => {
        ordre;
        laaneOrdre;
        salgsOrdre;
      }
    )
  }

  getOrdrenId(ordre: Ordre) {
    forkJoin([
      this.http.get<Ordre>(`${this.apiUrl}/id/${ordre.PK_ordreId}`),
      this.http.get<LaaneOrdreDetaljer>(`${this.apiUrl}/laane-id/${ordre.PK_ordreId}`),
      this.http.get<SalgsOrdreDetaljer>(`${this.apiUrl}/salgs-id/${ordre.PK_ordreId}`),
    ]).subscribe(
      ([
        ordre,
        laaneOrdre,
        salgsOrdre
      ]) => {
        ordre;
        laaneOrdre;
        salgsOrdre;
      }
    )
  }
}