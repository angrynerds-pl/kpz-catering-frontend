import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {FullOrderDetails} from '../model/fullOrderDetails';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@aspnet/signalr';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private hubConnection: HubConnection;
  order: Array<FullOrderDetails>;
  private orderSub = new Subject<Array<FullOrderDetails>>();

  url = 'https://cateringbackend.azurewebsites.net/Order/ordersList';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Array<FullOrderDetails>>
  {
    return this.http.get<Array<FullOrderDetails>>(this.url);
  }
  
  getOrders2(): Observable<Array<FullOrderDetails>>
  {
    return this.orderSub.asObservable();
  }

  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.url)
      .configureLogging(LogLevel.Debug)
      .build();
  }

  register(): void {
    this.hubConnection.on('InformAdmin', (order: Array<FullOrderDetails>) => {
      console.log(order);
      this.order = order;
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
  sendOrders()
  {
    this.hubConnection.invoke('ConfirmedOrders', this.order).catch(err => console.error(err));
  }
}
