import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {FullOrderDetails} from '../../model/fullOrderDetails';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  userClaims: any;
  orders: Array<FullOrderDetails> ;
  constructor(private orderService: OrderService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getOrders();
    this.loginService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
    });
  }

  getOrders()
  {
    this.orderService.getOrders().subscribe(orders => this.orders =  orders);
  }

  confirm(order)
  {
    order.status = 'zatwierdzono';
  }
  logout()
  {
    localStorage.removeItem('userToken');
    this.router.navigate(['/admin']);
  }
}
