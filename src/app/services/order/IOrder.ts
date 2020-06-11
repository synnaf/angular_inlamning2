import { Subject } from 'rxjs';
import { Order } from '../../models/Order';

export default interface IOrder {
  orderList: Subject<Order[]>;
  showOrders(): void;
  createOrder(order);
}
