import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = '';
  constructor(private http: HttpClient) { }

  postOrder(order)
  {
    return this.http.post<any>(this.url, order);
  }
}
