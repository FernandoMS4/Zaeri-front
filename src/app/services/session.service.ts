import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenRefreshRequest } from '../models/token-refresh-request';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  base_url = `${environment.apiurl}`;

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");
    return token && refreshToken;
  }

  public refreshToken(): Observable<any> {
    // Implement your logic to refresh the token here.
    // Make sure to return an Observable<string> that resolves to the new token.
    const body = {
      token: localStorage.getItem('token'),
      refreshToken: localStorage.getItem('refreshToken')
    }
    return this.http.post(`${this.base_url}api/auth/v1/refresh-token`, body, {}).pipe(take(1));
  }
}
