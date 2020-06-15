import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintDataComponent } from './components/print-data/print-data.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { StartComponent } from './components/start/start.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'products', component: PrintDataComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'checkout', component: CheckoutFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
