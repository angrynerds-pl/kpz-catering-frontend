import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesListComponent } from './core/components/dishes-list/dishes-list.component';
import { CartComponent } from './core/components/cart/cart.component';
import { OrderFormComponent } from './core/components/order-form/order-form.component';
import {LoginComponent} from './admin/components/login/login.component';
import {AdminPageComponent} from './admin/components/admin-page/admin-page.component'
import { AuthGuard } from './admin/auth/auth.guard';
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';




const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'menu', component: DishesListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderFormComponent},
  { path: 'admin', component: LoginComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'admin/page', component: AdminPageComponent, canActivate: [AuthGuard]}

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
