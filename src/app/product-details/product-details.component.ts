import { Component, OnInit } from '@angular/core';
import { product, } from '../product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{


  product:product ={
    id:101,
    name:"Toyota Red",
    details: "this is new car",
    quantity: 10,
    price:500
   }


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}


  addToCart(product: product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
    
  }

}
