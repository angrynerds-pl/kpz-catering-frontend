import { Component, OnInit, HostListener } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {OrderDetails} from 'src/app/shared/models/order-details';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from 'src/app/shared/models/User';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  currentUser: User;
  orders: Array<OrderDetails> = [] ;
  constructor(private orderService: OrderService, private router: Router, private authenticationService: LoginService) 
  {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.orderService.createConnection();
    this.orderService.register();
    this.orderService.startConnection();
  }

  ngOnInit(): void {
    this.getOrders();
  }
  
  getOrders()
  {
    this.orderService.getOrders().subscribe(orders => this.orders =  orders);
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
