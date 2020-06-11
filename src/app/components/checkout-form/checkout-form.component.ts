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
    const orderProducts = [];

    // newOrder är infon från formuläret
    const newOrder: Order = {
      orderId: 22,
      companyId: 666,
      createdBy: customerDetails.customerEmail,
      created: "0001-01-01 T00:00:00",
      paymentMethod: customerDetails.customerPayment,
      totalPrice: 22,
      status: 0,
      products: orderProducts
    };

    const detailsProducts = this.cartItems.map((movie) => {
      return { productId: movie.movieId, product: movie.movieName, amount: movie.quantity, orderId: 22 };
    });

    detailsProducts.forEach((product) => {
      newOrder.products.push(product);
    });


    console.log(newOrder.products);

    /*products:
    en array av objekt, varje objekt är en produkt från varukorgen */
    // loopa igenom produkterna och skapa upp ett nytt objekt



    // "orderRows":[
    //   {
    //     "id":5370,
    //     "productId":76,
    //     "product":null,
    //     "amount":0,
    //     "orderId":4655
    //   },
    //   {
    //     "id":5371,
    //     "productId":78,
    //     "product":null,
    //     "amount":0,
    //     "orderId":4655}
    // ]


    // en order som består av:
    /*
      orderID: startvärde
      companyId: startvärde

      createdBy: customer
      paymentMehtod: customer

      totalPrice: Cart
      status: startvärde

      orderRows:det som finns i Cart

      */


    // formulärets products blir detsamma som cartItems
    // newOrder.products = this.cartItems.map((movie) => {
    //   return { productId: movie.movieId, amount: movie.quantity };
    // });

    // glöm inte att tömma denna array när vi är klara

  //   newOrder.totalPrice =  this.totalPrice;
  //   newOrder.products = [];

  //   const products = this.cartItems.map((m) => {
  //     return { productId: m.movieId, amount: m.quantity };
  //   });

  //   products.forEach(product=> {
  //   newOrder.products.push(product)

  // });

    // i order service körs sedan anropet till http

    this.order.createOrder(newOrder);

  }

}





