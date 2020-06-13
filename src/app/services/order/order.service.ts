import { Injectable } from '@angular/core';
import IOrder from './IOrder';
import { Order } from 'src/app/models/Order';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OrderService implements IOrder {

  // orderList prenumererar på ämnen av typen Order-Array
  orderList: Subject<Order[]> = new Subject<Order[]>();

  constructor(private http: HttpClient) { }

  showOrders(): void {
    // skickar en request efter mitt companyId

    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=666')
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
        orderFromApi.products = order.orderRows;
        return orderFromApi;
      });
      this.orderList.next(ordersFromApi);
    });
  }

  createOrder(order: Order) {

    // visar order som kommer ifrån placeOrder > newOrder
    console.log(order);

  //   this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', {
  //     companyId: 666,
  //     created: order.created,
  //     createdBy: order.createdBy,
  //     paymentMethod: order.paymentMethod,
  //     totalPrice: order.totalPrice,
  //     status: order.status,
  //     orderRows: order.products,
  //   })
  //   .subscribe((data) => {
  //     console.log(data)
  //   });
  }

  removeOrder(orderToRemove: number): Observable<{}> {
    console.log(orderToRemove);
    const url = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders' + orderToRemove; // DELETE api/heroes/42
    console.log(url);

    // ordern tas bort, men hur laddar man om listan??
    return this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + orderToRemove);


  }


}


