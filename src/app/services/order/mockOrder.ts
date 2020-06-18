import IOrder from './IOrder';
import { Order } from 'src/app/Models/Order';
import { Subject, Observable, of } from 'rxjs';

export class MockOrderService implements IOrder {
  orderList: Subject<Order[]> = new Subject<Order[]>();
  date = new Date();
  // mockdata i vår orderlista
  order: Order[] = [
    {orderId: 1, companyId: 666, createdBy: "Name", created: this.date, paymentMethod: "Visa", totalPrice: 100, status: 0,
    products: [
      {movieId: 1, movieName: "name", movieDescription: "description",
      movieImage: "url", moviePrice: 100, releaseYear:2020, quantity: 1, sum:100}
    ]},
    {orderId: 2, companyId: 666, createdBy: "Name", created: this.date, paymentMethod: "Visa", totalPrice: 100, status: 0,
    products: [
      {movieId: 2, movieName: "name", movieDescription: "description",
      movieImage: "url", moviePrice: 100, releaseYear:2020, quantity: 1, sum:90}
    ]}
  ];
  // mock-data som vi använder för att testa ta bort
  orderToRemove = {
    orderId: 2, companyId: 666, createdBy: "Name", created: this.date,
    paymentMethod: "Visa", totalPrice: 100, status: 0,
      products: [
      {movieId: 2, movieName: "name", movieDescription: "description",
      movieImage: "url", moviePrice: 100, releaseYear:2020, quantity: 1, sum:90}
    ]
  };
  // mock-data som vi använder för att testa lägg till
  orderToAdd = {
    orderId: 3, companyId: 666, createdBy: "Name", created: this.date,
    paymentMethod: "Visa", totalPrice: 100, status: 0,
      products: [
      {movieId: 2, movieName: "name", movieDescription: "description",
      movieImage: "url", moviePrice: 100, releaseYear:2020, quantity: 1, sum:90}
    ]
  };

  showOrders(): void {
    this.orderList.next(this.order);
  }

  createOrder(orderToAdd: Order) {
    this.order.push(orderToAdd);
    return of(this.order);
  }

  removeOrder(orderToRemove: number): Observable<{}> {
    const removedOrder = this.order.splice(1, 1);
    return of(removedOrder);
  }

}
