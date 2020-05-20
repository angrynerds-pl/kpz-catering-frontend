import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {FullOrderDetails} from '../../model/fullOrderDetails';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/admin/model/User';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  currentUser: User;
  orders: Array<FullOrderDetails> ;
  constructor(private orderService: OrderService, private router: Router, private authenticationService: LoginService) 
  {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    this.getOrders();
    this.getNewOrders();
  }

  getOrders()
  {
    this.orderService.getOrders().subscribe(orders => this.orders =  orders);
    this.orders.sort((a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime());
  }
  getNewOrders()
  {
    this.orderService.singalRecived.subscribe(signal => this.orders.push(signal));
    this.orders.sort((a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime());
  }

  confirm(order)
  {
    order.status = 'zatwierdzono';
    this.orderService.sendOrders(order);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/admin']);
}
}
