import { Component, OnInit } from '@angular/core';
import { Order } from '../order';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  userModel = new Order();
  constructor() { }

  ngOnInit(): void {
  }

}
