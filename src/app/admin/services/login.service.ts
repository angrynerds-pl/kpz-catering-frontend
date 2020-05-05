import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  login(model)
  {
    return this.http.post<any>(this.url, model);
  }
}
