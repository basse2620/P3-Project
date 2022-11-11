import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Addresse } from '../../interfaces/addresse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AddresseService {
  private apiUrl = 'http://192.168.20.30:8090/addresse';

  constructor(private http: HttpClient) { }

  getAddresse(): Observable<Addresse[]> {
    return this.http.get<Addresse[]>(this.apiUrl)
  }

  getAddresseId(address: Addresse): Observable<Addresse> {
    const url = `${this.apiUrl}/${address.PK_addresseId}`;
    return this.http.get<Addresse>(url);
  }

  getAddressePostNr(address: Addresse): Observable<Addresse> {
    const url = `${this.apiUrl}/post-nr/${address.FK_postNr}`;
    return this.http.get<Addresse>(url);
  }

  postAddresse(address: Addresse): Observable<Addresse> {
    return this.http.post<Addresse>(this.apiUrl, address, httpOptions);
  }

  updateAddress(address: Addresse): Observable<Addresse> {
    const url = `${this.apiUrl}/${address.PK_addresseId}`;
    return this.http.put<Addresse>(url, address, httpOptions);
  }
}
