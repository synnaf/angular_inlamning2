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
  constructor() { }

  // vi tar emot en movie av typen Movie
  addToCart(movie: Movie) {

    // vi kontrollerar om filmen redan finns
    this.movieInCart = this.cartList.find((m) => m.movieId === movie.movieId);

    console.log(this.movieInCart + ' Undefined är ok, finns ej i korgen'); // denna är undefined första gången, hittas andra gången

    // om filmen inte finns i cart
    if (!this.movieInCart) {
        this.cartList.push({
          ...movie,
          movieId: movie.movieId,  // hur kan jag se till att rätt saker följer med?
          quantity: 1,
          sum: movie.moviePrice
        });

        console.log(this.movieInCart); // denna är undefined första gången
        // denna körs ej andra gången?

        return; // varför?
    }
    this.increaseCartItem(this.movieInCart);
    // här görs en ökning?
  }

  showItems() {
    return this.cartList;
  }

  // här är funktionen som lägger en existerande produkt i varukorgen
  increaseCartItem(item: Cart) {
    this.movieInCart = this.cartList.find((m) => m.movieId === item.movieId);
    this.movieInCart.quantity++,

    console.log(this.movieInCart.quantity);
    // this.movieInCart = this.cartList.find((m) => m.movieId === item.movieId);
    // console.log(this.movieInCart); // denna hittas andra gången
    // this.movieInCart.quantity++;
    // // denna ska räkna ut summan, så priset måste vara tillgängligt
    // this.movieInCart.sum = this.movieInCart.quantity * this.movieInCart.quantity;
    return this.cartList;
  }

  decreaseItems(item: Cart) {
    this.movieInCart = item;
    if (this.movieInCart.quantity > 1) {
      this.movieInCart.quantity--;
      return this.cartList;
    } else {
      this.cartList = this.cartList.filter((ritem) =>
      this.movieInCart.movieId !== ritem.movieId);
      console.log(this.cartList);
      return this.cartList;
    }
  }



  // problemet här är att den inte registrerar quantity = 0,
  // utan den tolkar det som att när det ser ut som 0 så är det egentligen 1
  // alternativ att testa:
  /* 1. se om det har med array att göra? att noll och null ej e samma */
  /* 2. se om det har med -knappen att göra?
        dvs. att den först går igenom och kollar quantity? Kanske ska man visa en annan knapp?  */


  // removeItemFromCart(movieInCart) {

  //     console.log(movieInCart);

  //     // let removeIndex = this.cartList.map((item) =>  item.movieId ).indexOf(this.movieInCart.movieId);
  //     // this.cartList.splice(removeIndex, 1);

  //     // get index of object with id:37
  //     // var removeIndex = this.cartList.map((item) => {
  //     //   this.movieInCart.movieId == item.movieId;

  //     // })

  //     // this.cartList = this.cartList.filter(
  //     //   (item) => this.movieInCart.movieId !== item.movieId
  //     // );

  //   return this.cartList;

  // }


}
