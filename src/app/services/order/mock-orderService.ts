import { Injectable } from '@angular/core';
import IOrder from './IOrder';

@Injectable({
  providedIn: 'root'
})

export class MockOrderService implements IOrder {
  orderList: import("rxjs").Subject<import("../../models/Order").Order[]>;
  showOrders(): void {
    throw new Error("Method not implemented.");
  }
  createOrder(order: any) {
    throw new Error("Method not implemented.");
  }
  removeOrder(order: any) {
    throw new Error("Method not implemented.");
  }



}

