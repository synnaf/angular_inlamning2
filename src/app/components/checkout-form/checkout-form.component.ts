import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validatorTest } from '../../validators/validatorTest';
import { Order } from 'src/app/models/Order';
import { Movie } from 'src/app/models/Movie';
import { ShoppingcartService } from 'src/app/services/shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent implements OnInit {
  cartItems;


  // tom lista som följer Order modellen
  orders: Order[] = [];


  // värdet för egenskapen är en array, första värdet är startvärdet
  // andra värdet är validering
  orderForm = this.fb.group({
    products: this.fb.array([this.cartItems]),
    orderFirst: this.fb.group({
      orderId: [''],
      companyId: [666],
      orderDate: [Date.now()],
      orderStatus: ['']
    }),
    orderSecond: this.fb.group({
      customerName: [''],
      customerLastName: [''],
      customerEmail: ['']
    }),
    orderThird: this.fb.group({
      customerPayment: [''],
      orderPrice: [''],
    })

  });



  // jag har en ny grupp, som tar in en lista
  //   nicks: this.fb.array([]), // smeknamnen ska vara en form-array
  // });

  // i kontruktoprn lägger vi till vår service formbuilder
  constructor(
    private fb: FormBuilder,
    private cart: ShoppingcartService,
    ) { }

  ngOnInit(): void {

    this.cartItems = this.cart.showItems();

  }


  // funktion som körs när man trycker BUY

  placeOrder() {
    console.log(this.orderForm.value);

    // skickar in orderForms'värden till listan orders?
    this.orders.push(this.orderForm.value);

    // här vill vi skicka till vår orderService det som finns i formuläret
    // i order service körs sedan anropet till http



  }

}
