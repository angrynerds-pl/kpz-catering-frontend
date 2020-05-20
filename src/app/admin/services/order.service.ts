import { Injectable, EventEmitter } from '@angular/core';
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
  singalRecived = new EventEmitter<FullOrderDetails>();

  url = 'https://cateringbackend.azurewebsites.net/Order/ordersList';

  constructor(private http: HttpClient) {
    this.createConnection();
    this.register();
    this.startConnection();
   }

  getOrders(): Observable<Array<FullOrderDetails>>
  {
    return this.http.get<Array<FullOrderDetails>>(this.url);
  } 

  createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.url)
      .configureLogging(LogLevel.Debug)
      .build();
  }

  register(): void {
    this.hubConnection.on('InformAdmin', (order: FullOrderDetails) => {
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
        setTimeout(function() { this.startConnection(); }, 5000);
      });
  }
  sendOrders(order)
  {
    this.hubConnection.invoke('ConfirmedOrders', order).catch(err => console.error(err));
  }
}
