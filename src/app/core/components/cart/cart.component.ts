import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dishes;
  sum: number;
  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.getDishes();
    this.getSum();
  }
  getDishes() {
    this.cartService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  getSum() {
    this.cartService.getSum().subscribe(sum => this.sum = sum);
  }
  removeProduct(product) {
    this.cartService.removeFromCart(product);
  }

  countProduct(product) {
    return this.cartService.countProduct(product);
  }

  quantity: number = 1;

  plus() {
    if(this.quantity != 5)
      this.quantity++;
  }

  minus() {
    if(this.quantity != 0)
      this.quantity--;
  }

}
