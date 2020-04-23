import { Component, OnInit } from '@angular/core';
import { CartData } from './cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})


export class CartPageComponent implements OnInit {
  
  cartData: CartData[];
  constructor() { }

  addToCard(){}

  ngOnInit(): void {
  }

}
