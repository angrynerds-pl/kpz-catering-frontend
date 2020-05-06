import { Component, OnInit } from '@angular/core';
import {dishes} from '../../Models/dishes';
import {CartService} from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
  dishes = dishes;
  items = [];
  json;
  title = 'todo-app';

  url = 'https://cateringbackend.azurewebsites.net/dishes';
  constructor(private cartService: CartService, private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);
      for (let name in data) {
        if (data.hasOwnProperty(name)) {
          this.items.push(data[name]);
        }
      }
    });
  }

  ngOnInit(): void {
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
