import { Injectable } from '@angular/core';
import IOrder from './IOrder';
import { Order } from 'src/app/models/Order';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements IOrder{

  // orderList prenumererar på ämnen av typen Order-Array
  orderList: Subject<Order[]> = new Subject<Order[]>();

  constructor(private http: HttpClient) { }


  showOrders(): void {
    // skickar en request efter mitt companyId

    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=1')
    .subscribe((orderData: any) => {
      const ordersFromApi: Order[] = orderData.map(order => {
        const orderFromApi = new Order();
        orderFromApi.orderId = order.id;
        orderFromApi.companyId = order.companyId;
        orderFromApi.created = order.created;
        orderFromApi.createdBy = order.createdBy;
        orderFromApi.paymentMethod = order.paymentMethod;
        orderFromApi.totalPrice = order.totalPrice;
        orderFromApi.status = order.status;
        orderFromApi.orderRows = order.orderRows;
        return orderFromApi;
      });
      this.orderList.next(ordersFromApi);
    });
  }

}