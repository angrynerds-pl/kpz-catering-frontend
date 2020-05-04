import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { CartService } from '../cart.service';
import { OrderDetails } from '../order-details';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  userModel = new Order();
  orderDetails: OrderDetails;
  submitted = false;
  constructor(public orderService: OrderService, public cartService: CartService) { }
  
  ngOnInit(): void {
  }
  
  makeOrder()
  {
    this.cartService.getDishes().subscribe(dishes => this.orderDetails.dishes = dishes);
    this.cartService.getSum().subscribe(sum => this.orderDetails.sum = sum);
    this.orderDetails.order = this.userModel;
  }

  onSubmit()
  {
    this.makeOrder();
    this.submitted = true;
    this.orderService.postOrder(this.orderDetails).subscribe(
      data => console.log('Succes', data),
      error => console.error('error', error));
  }

}
