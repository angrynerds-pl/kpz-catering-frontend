import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'https://cateringbackend.azurewebsites.net/Order';
  //url = 'http://localhost:3000/users';
   
  constructor(private http: HttpClient) { }

  postOrder(order)
  { 
    return this.http.post<any>(this.url, order);
  }
}
