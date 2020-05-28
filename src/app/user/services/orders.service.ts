import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {OrderDetails} from 'src/app/shared/models/order-details';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Array<OrderDetails> = [];
  url = '';
  constructor(private http: HttpClient) {
    this.getOrders();
   }

  getOrders()
  {
    this.http.get<Array<OrderDetails>>(this.url).subscribe(orders => this.orders =  orders);
    this.orders.sort((a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime());
  }
}
