import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url = 'https://cateringbackend.azurewebsites.net';
  
  constructor(private http: HttpClient) { }

  login(model)
  {
    return this.http.post<any>(this.url, model);
  }

  userAuthentication(userName, password)
  {
    let data = "username="+userName+"&password="+password+"&grant_type=password";
    let reqHeader = new HttpHeaders({'Content-Type':'application/x-wwww-urlencoded'});
    return this.http.post(this.url + '/token', data, {headers: reqHeader});
  }
  getUserClaims()
  {
    return this.http.get(this.url + '/api/GetUserClaims',
    {headers: new HttpHeaders({'Authorization' : 'Bearer' + localStorage.getItem('userToken')})});
  }
}
