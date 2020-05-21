import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import { DishesListService } from '../../services/dishes-list.service';



@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  
  title = 'todo-app';
  menu = [];
  rows = [];
  url = 'https://cateringbackend.azurewebsites.net/dishes';
  constructor(private cartService: CartService, private dishesListService: DishesListService) {
  }

  ngOnInit(): void {
    this.menu = this.dishesListService.items;
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  fillRowTable(): void {
    for(let i = 1; i < this.returnSize(); i++) {
      this.rows.push(i);
    }
  }

  returnSize(): number {
    return this.menu.length;
  }
}
