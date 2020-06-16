import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintDataComponent } from './components/print-data/print-data.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PrintDataComponent,
    CheckoutFormComponent,
    ShoppingcartComponent,
    StartComponent,
    AdminComponent,
    NotFoundComponent,
    SearchMoviesComponent,
    ProductDetailsComponent
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
