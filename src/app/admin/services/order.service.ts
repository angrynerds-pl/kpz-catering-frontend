import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {FullOrderDetails} from '../model/fullOrderDetails';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  
  url = 'https://cateringbackend.azurewebsites.net/Order/ordersList';
  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<FullOrderDetails>>
  {
    return this.http.get<Array<FullOrderDetails>>(this.url);
  }
}
