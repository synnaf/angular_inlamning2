import { Movie } from 'src/app/models/Movie';
import { Cart } from 'src/app/models/Cart';

export default interface IShoppingcart {
  cartList: Cart[];
  addToCart(movie): void;
  showItems(): void;
}
