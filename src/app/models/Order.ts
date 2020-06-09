import {Movie} from '../models/Movie';
import {Cart} from '../models/Cart';
// denna ska vara cart

export class Order {
  orderId: number;
  companyId: number;
  createdBy: string;
  created: Date;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: Cart[];
}