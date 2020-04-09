import { Injectable } from '@angular/core';
import {dishes} from './dishes';
import {Dish} from './dish';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  dishesList = [];
  dishesListObs = new BehaviorSubject<Array<any>>(this.dishesList);
  sumObs = new BehaviorSubject<number>(0);
  constructor() {
    this.dishesListObs.next(this.dishesList);
    this.sumObs.next(0);
  }

  addToCart(product) {
    const list = this.dishesListObs.getValue();
    list.push(product);
    this.dishesListObs.next(list);
    let sum = this.sumObs.getValue();
    sum += product.price;
    this.sumObs.next(sum);
  }
  removeFromCart(product)
  {
    const list = this.dishesListObs.getValue().filter(e => e !== product);
    //let list = this.dishesListObs.getValue();
    //const index = list.findIndex(product);
    //list = list.splice(index, 1);
    this.dishesListObs.next(list);
    let sum = this.sumObs.getValue();
    sum -= product.price;
    this.sumObs.next(sum);
  }

  getDishes() {
    return this.dishesListObs.asObservable();
  }
  getSum() {
    return this.sumObs.asObservable();
  }
  clearCart() {
    this.dishesList = [];
    return this.dishesList;
  }
 
}
