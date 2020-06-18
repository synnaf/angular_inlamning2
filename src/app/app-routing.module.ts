import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { NotFoundComponent } from './components/not-found/notFound/not-found.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'products/:id', component: ProductDetailComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'checkout', component: CheckoutFormComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
