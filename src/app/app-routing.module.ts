import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesListComponent } from './core/components/dishes-list/dishes-list.component';
import { CartComponent } from './core/components/cart/cart.component';
import { OrderFormComponent } from './core/components/order-form/order-form.component';
import {LoginComponent} from './admin/components/login/login.component';
import {AdminPageComponent} from './admin/components/admin-page/admin-page.component'



const appRoutes: Routes = [
  { path: '', component: DishesListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderFormComponent},
  { path: 'admin', component: LoginComponent},
  { path: 'admin/page', component: AdminPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
})
export class AppRoutingModule {
}
