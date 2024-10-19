import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'http://localhost:3000/api/about';

  constructor(private http: HttpClient) { }

  getAbout(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateAbout(data: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, data);
  }
}
