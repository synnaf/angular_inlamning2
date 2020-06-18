import IShoppingcart from './IShoppingcart';
import { Cart } from 'src/app/models/Cart';
import { Subject } from 'rxjs';
import { Movie } from 'src/app/models/Movie';

export class MockShoppingcart implements IShoppingcart {

  movieInCart: Cart;
  cartSource = new Subject<Cart[]>();
  totalPrice: number = 0;
  cartList: Cart[] = [
    {  movieId: 1, movieName: "Test Movie", moviePrice: 100,
      movieImage: "google.se", movieDescription: "Description", releaseYear: 2020,
      movieCategory: [{categoryId: 2, category: "Category"}],
      quantity: 2, sum: 200
    }
  ];

  // detta ska vara movieInCart
  movieToAdd = {
    movieName: 'Name 2', movieId: 10, moviePrice: 100,
    movieImage: 'URL', movieDescription: 'Description',
    releaseYear: 2020, movieCategory: [{categoryId: 1, category: 'Text'}]
  };


  addToCart(movieToAdd: Movie): void {
    this.movieInCart = this.cartList.find((m) => m.movieId === movieToAdd.movieId);
    if (!this.movieInCart) {
        this.cartList.push({
          ...movieToAdd,
          movieId: movieToAdd.movieId,
          quantity: 1,
          sum: movieToAdd.moviePrice
        });
        return;
    }
    this.totalSum();
    this.increaseCartItem(this.movieInCart);
  }

  showItems() {
    return this.cartList;
  }

  emptyItems() {
    this.cartList = [];
    return this.showItems();
  }

  increaseCartItem(item: Cart) {
    this.movieInCart = this.cartList.find((m) => m.movieId === item.movieId);
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
    let calcPrice = 0;
    this.cartList.forEach((cartItems) => {
      calcPrice += cartItems.quantity * cartItems.moviePrice;
    });
    this.totalPrice = calcPrice;
  }


}
