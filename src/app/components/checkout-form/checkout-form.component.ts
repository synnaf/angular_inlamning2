import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  cartItems;
  // orders;
  orderList: Order[] = [];

  orderForm = this.fb.group({
      customerName: [''],
      customerLastName: ['', [Validators.required, Validators.minLength(3)]],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPayment: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private cart: ShoppingcartService,
    private order: OrderService
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cart.showItems();
  }

  get customerEmail() {
    return this.orderForm.get('customerEmail') as FormControl;
  }
  get customerLastName() {
    return this.orderForm.get('customerLastName') as FormControl;
  }
  get customerPayment() {
    return this.orderForm.get('customerPayment') as FormControl;
  }

  placeOrder() {
    const customerDetails = this.orderForm.value;
    const orderDate = new Date();

    const newOrder = {
      companyId: 666,
      createdBy: customerDetails.customerEmail,
      created: orderDate,
      paymentMethod: customerDetails.customerPayment,
      totalPrice: this.cart.totalPrice,
      status: 0,
      products: []
    };
    const detailsProducts = this.cartItems.map((movie) => {
      return { productId: movie.movieId, amount: movie.quantity, orderId: 22 };
    });
    detailsProducts.forEach((orderedProduct) => {
      newOrder.products.push(orderedProduct);
    });
    this.order.createOrder(newOrder);
    customerDetails.customerEmail = "";
    customerDetails.customerName = "";
    customerDetails.customerLastName = "";

  }

}





