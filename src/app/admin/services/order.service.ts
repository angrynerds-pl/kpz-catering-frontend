import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {OrderDetails} from 'src/app/shared/models/order-details';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private hubConnection: HubConnection;
  order: Array<OrderDetails>;
  singalRecived = new EventEmitter<OrderDetails>();

  url = 'https://cateringbackend.azurewebsites.net/Order/ordersList';
  url2 = 'https://cateringbackend.azurewebsites.net/ordersHub';

  constructor(private http: HttpClient) {
    this.createConnection();
    this.register();
    this.startConnection();
   }

  getOrders(): Observable<Array<OrderDetails>>
  {
    return this.http.get<Array<OrderDetails>>(this.url);
  } 

  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.url2)
      .configureLogging(LogLevel.Debug)
      .build();
  }

  register(): void {
    this.hubConnection.on('InformAdmin', (order: OrderDetails) => {
      console.log(order);
      this.singalRecived.emit(order);
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
    this.hubConnection.invoke('ConfirmedOrders', order).catch(err => console.error(err));
  }
}
