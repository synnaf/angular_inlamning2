import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import IShoppingcart from './IShoppingcart';
import { Cart } from 'src/app/models/Cart';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService implements IShoppingcart {

  cartList: Cart[] = [];
  movieInCart: Cart;
  cartSource = new Subject<Cart[]>();
  totalList = [];
  totalPrice: number = 0;
  constructor() { }

  // vi tar emot en movie av typen Movie
  addToCart(movie: Movie) {
    // vi kontrollerar om filmen redan finns
    this.movieInCart = this.cartList.find((m) => m.movieId === movie.movieId);

    // om filmen inte finns i cart
    if (!this.movieInCart) {
        this.cartList.push({
          ...movie,
          movieId: movie.movieId,  // hur kan jag se till att rätt saker följer med?
          quantity: 1,
          sum: movie.moviePrice
        });
        return; // varför?
    }
    this.totalSum();
    this.increaseCartItem(this.movieInCart);
  }

  showItems() {
    this.totalSum();
    return this.cartList ;
  }

  increaseCartItem(item: Cart) {
    this.movieInCart = this.cartList.find((m) => m.movieId === item.movieId);
    this.movieInCart.quantity++;
    this.totalSum();
    return this.cartList;
  }


  decreaseItems(item: Cart) {
    this.movieInCart = item;
    if (this.movieInCart.quantity > 1) {
      this.movieInCart.quantity--;
      this.movieInCart.sum =  this.movieInCart.quantity * this.movieInCart.moviePrice;
      return this.cartList;
    } else {
      this.cartList = this.cartList.filter((ritem) =>
      this.movieInCart.movieId !== ritem.movieId);
      return this.cartList;
    }
  }

  totalSum() {
  // funktion som skriver ut totalsumman
    let calcPrice = 0;
    this.cartList.forEach((cartItems) => {
      calcPrice += cartItems.quantity * cartItems.moviePrice;
    });
    this.totalPrice = calcPrice;
    console.log(this.totalPrice);
  }


}
