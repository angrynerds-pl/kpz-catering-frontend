import { Component, OnInit } from '@angular/core';
import { ClientInfo } from '../../../shared/models/ClientInfo';
import { OrderService } from '../../services/order.service';
import { CartService } from '../../services/cart.service';
import { OrderDetails } from '../../../shared/models/order-details';
import { Router } from '@angular/router';
import {Address} from 'src/app/shared/models/address';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  userModel = new ClientInfo();
  userAddress = new Address();
  orderDetails: OrderDetails = new OrderDetails();
  constructor(public orderService: OrderService, public cartService: CartService, private router: Router) { }
  
  ngOnInit(): void {
  }
  
  makeOrder()
  {
    this.cartService.getDishes().subscribe(dishes => this.orderDetails.dishes = dishes);
    this.cartService.getSum().subscribe(sum => this.orderDetails.sum = sum);
    this.orderDetails.client = this.userModel;
    this.orderDetails.address = this.userAddress;
    this.orderDetails.orderTime = new Date();
    this.orderDetails.orderDeliveredTime = new Date();
  }

  onSubmit()
  {
    this.makeOrder();
    this.orderService.postOrder(this.orderDetails).subscribe(
      data => console.log('Succes', data),
      error => console.error('error', error));
    this.router.navigate(['/']);
  }

}
