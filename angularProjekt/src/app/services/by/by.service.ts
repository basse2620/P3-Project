import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { By } from '../../interfaces/by';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class ByService {
  private apiUrl = 'http://192.168.20.30:8090/by';

  constructor(private http: HttpClient) { }

  getByer(): Observable<By[]> {
    return this.http.get<By[]>(this.apiUrl);
  }

  getBy(by: By): Observable<By> {
    const url = `${this.apiUrl}/${by.PK_postNr}`;
    return this.http.get<By>(url);
  }
}
