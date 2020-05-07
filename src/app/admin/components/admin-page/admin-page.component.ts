import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Observable, BehaviorSubject } from 'rxjs';
import {FullOrderDetails} from '../../model/fullOrderDetails';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  orders: Array<FullOrderDetails> ;
  constructor(private orderService: OrderService) { }

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
  }
}
