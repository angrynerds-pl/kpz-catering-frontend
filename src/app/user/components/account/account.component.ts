import { Component, OnInit } from '@angular/core';
import {OrderDetails} from 'src/app/shared/models/order-details';
import {OrdersService} from 'src/app/user/services/orders.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  orders: Array<OrderDetails> = [] ;
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.orders = this.ordersService.orders;
  }

}
