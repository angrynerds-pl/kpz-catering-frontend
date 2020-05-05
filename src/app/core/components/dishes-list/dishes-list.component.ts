import { Component, OnInit } from '@angular/core';
import {dishes} from '../../Models/dishes';
import {CartService} from '../../services/cart.service';
@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes = dishes;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
