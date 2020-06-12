import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { Movie } from 'src/app/models/Movie';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  showForm: boolean = false;
  cartItems;
  cartTotal;

  constructor(private cartService: ShoppingcartService) { }

  ngOnInit(): void {

    this.cartService.cartSource.subscribe((items: Cart[]) => {
      this.cartItems = items;
    });

    this.cartItems = this.cartService.showItems();
    this.cartTotal = this.cartService.totalPrice;
  }

  increase(item) {
    this.cartItems = this.cartService.increaseCartItem(item);
    this.cartTotal = this.cartService.totalPrice;
  }

  decrease(item) {
    this.cartItems = this.cartService.decreaseItems(item);
    console.log(item.quantity);
    this.cartTotal = this.cartService.totalPrice;
  }

}
