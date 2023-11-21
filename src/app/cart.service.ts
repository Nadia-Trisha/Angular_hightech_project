import { Injectable } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor() { }
  items: product[] = [];

 
  
    addToCart(product:product) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
 
  }

