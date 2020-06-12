import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validatorTest } from '../../validators/validatorTest';
import { Order } from 'src/app/models/Order';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  cartItems;
  // tom lista som följer Order modellen
  orders;
  //
  orderList: Order[] = [];

  // värdet för egenskapen är en array, första värdet är startvärdet
  orderForm = this.fb.group({
      customerName: [''],
      customerLastName: [''],
      customerEmail: [''],
      customerPayment: [''],
  });


  // i kontruktoprn lägger vi till vår service formbuilder
  constructor(
    private fb: FormBuilder,
    private cart: ShoppingcartService,
    private order: OrderService
    ) { }

  ngOnInit(): void {
    this.cartItems = this.cart.showItems();
  }

  // funktion som körs när man trycker BUY
  placeOrder() {

    const customerDetails = this.orderForm.value;
    const orderDate = new Date();

    // newOrder är infon från formuläret
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

    console.log(newOrder);
    this.order.createOrder(newOrder);

  }

}





