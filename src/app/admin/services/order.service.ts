import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError, BehaviorSubject } from 'rxjs';
import {OrderDetails} from 'src/app/shared/models/order-details';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@aspnet/signalr';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private hubConnection: HubConnection;
  orders: Array<OrderDetails> = [];
  orderSub = new BehaviorSubject<Array<OrderDetails>>(this.orders);

  url = 'https://cateringbackend.azurewebsites.net/Order/ordersList';
  url2 = 'https://cateringbackend.azurewebsites.net/orderHub';
  url3 = 'https://cateringbackend.azurewebsites.net/Order/changeStatus';

  constructor(private http: HttpClient) {
    this.orderSub.next(this.orders);
   }

  getOrders(): Observable<Array<OrderDetails>>
  {
    this.http.get<Array<OrderDetails>>(this.url).subscribe(orders => this.orders =  orders);
    this.orders.sort((a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime());
    this.orderSub.next(this.orders);
    console.log('getOrders called');
    return this.orderSub.asObservable();
    
  } 

  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.url2)
      .configureLogging(LogLevel.Debug)
      .build();
  }

  register(): void {
    this.hubConnection.on('The new order was created', (order: OrderDetails) => {
      console.log(order);
      this.orders.push(order);
      this.orderSub.next(this.orders);
      this.orders.sort((a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime());
    });
  }

  startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started.');
      })
      .catch(err => {
        console.log('Opps!');
      });
  }
  sendOrders(order)
  {
    this.http.post<any>(this.url3, order).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
  }
}
