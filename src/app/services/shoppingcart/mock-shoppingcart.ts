import { Movie } from 'src/app/models/Movie';
import IShoppingcart from './IShoppingcart';

export class MockShoppingcart implements IShoppingcart {

    cartList: Movie[] = [
      { movieName: 'Star Wars 1', movieId: 91,
      moviePrice: 100, movieImage: 'www.google.se',
      movieDescription: 'snshshshs', releaseYear: 2001,
      movieCategory: 'x'},
      { movieName: 'Star Wars 3', movieId: 3,
      moviePrice: 100, movieImage: 'www.google.se',
      movieDescription: 'snshshshs', releaseYear: 2001,
      movieCategory: 'x'}
    ];


  constructor() { }

  addToCart(movie) {
    movie = {
      movieName: 'Star Wars 12', movieId: 3,
      moviePrice: 100, movieImage: 'www.google.se',
      movieDescription: 'snshshshs', releaseYear: 2001,
    };

    this.cartList.push(movie);
  }

  showItems() {
    return this.cartList;
  }

  increaseItems(item) {

    item = { movieName: 'Star Wars New', movieId: 3,
    moviePrice: 100, movieImage: 'www.google.se',
    movieDescription: 'snshshshs', releaseYear: 2001,
    movieCategory: 'x'};

    this.cartList.push(item);
    return this.cartList;

  }

  decreaseItems(item) {

    item = this.cartList[1];
    this.cartList.splice(item, 1);
    return this.cartList;

  }
}
