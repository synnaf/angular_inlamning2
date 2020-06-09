import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDataComponent } from './components/movie-data/movie-data.component';
import { PrintDataComponent } from './components/print-data/print-data.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SendOrderComponent } from './components/send-order/send-order.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieDataComponent,
    PrintDataComponent,
    CheckoutFormComponent,
    ShoppingcartComponent,
    StartComponent,
    SendOrderComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
