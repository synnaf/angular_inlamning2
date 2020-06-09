import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  orderList;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {


    this.orderService.orderList.subscribe((movie: Order[]) => {
      this.orderList = movie;
    });
    this.orderService.showOrders();


  }



}
