import { Component, OnInit } from '@angular/core';
import {dishes} from '../../Models/dishes';
import {CartService} from '../../services/cart.service';
import { DishesListService } from '../../services/dishes-list.service';



@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  /*dishes = dishes;
  items = [];
  json;*/
  title = 'todo-app';
  menu = [];
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
}
