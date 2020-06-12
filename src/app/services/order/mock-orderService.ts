import { Injectable } from '@angular/core';
import IOrder from './IOrder';
import { Order } from 'src/app/models/Order';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MockOrderService implements IOrder {

  // orderList prenumererar på ämnen av typen Order-Array
  orderList: Subject<Order[]> = new Subject<Order[]>();

  constructor(private http: HttpClient) { }

  showOrders(): void {
    // skickar en request efter mitt companyId

    // this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=666')
    // .subscribe((orderData: any) => {
    //   const ordersFromApi: Order[] = orderData.map(order => {
    //     const orderFromApi = new Order();
    //     orderFromApi.orderId = order.id;
    //     orderFromApi.companyId = order.companyId;
    //     orderFromApi.created = order.created;
    //     orderFromApi.createdBy = order.createdBy;
    //     orderFromApi.paymentMethod = order.paymentMethod;
    //     orderFromApi.totalPrice = order.totalPrice;
    //     orderFromApi.status = order.status;
    //     orderFromApi.products = order.orderRows;
    //     return orderFromApi;
    //   });
    //   this.orderList.next(ordersFromApi);
    // });
    console.log("This is mock-order");

  }

  createOrder(order: Order) {

    // visar order som kommer ifrån placeOrder > newOrder
    console.log(order);

    // this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', {
    //   companyId: 666,
    //   created: order.created,
    //   createdBy: order.createdBy,
    //   paymentMethod: order.paymentMethod,
    //   totalPrice: order.totalPrice,
    //   status: order.status,
    //   orderRows: order.products,
    // })
    // .subscribe((data) => {
    //   console.log(data)
    // });
  }


}


