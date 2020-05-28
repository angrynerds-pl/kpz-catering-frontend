import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'https://cateringbackend.azurewebsites.net/Account/Register';
   
  constructor(private http: HttpClient) { }

  postRegister(register) { 
    return this.http.post<any>(this.url, register);
  }
}

