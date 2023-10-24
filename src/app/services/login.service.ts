import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url = `${environment.apiurl}`;

  constructor(private http: HttpClient) { }


}
