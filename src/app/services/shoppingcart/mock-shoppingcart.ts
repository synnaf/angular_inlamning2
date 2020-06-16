
import IShoppingcart from './IShoppingcart';

export class MockShoppingcart implements IShoppingcart {
  cartList: import("../../models/Cart").Cart[];
  addToCart(movie: any): void {
    throw new Error("Method not implemented.");
  }
  showItems(): void {
    throw new Error("Method not implemented.");
  }


}
