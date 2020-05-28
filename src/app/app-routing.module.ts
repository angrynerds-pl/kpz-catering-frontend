import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesListComponent } from './core/components/dishes-list/dishes-list.component';
import { CartComponent } from './core/components/cart/cart.component';
import { OrderFormComponent } from './core/components/order-form/order-form.component';
import {LoginComponent} from './admin/components/login/login.component';
import {AdminPageComponent} from './admin/components/admin-page/admin-page.component'

import { AuthAdminGuard } from './shared/auth/authAdmin.guard';
import { AuthClientGuard } from './shared/auth/authClient.guard';
import {ClientLoginPageComponent} from 'src/app/user/components/client-login-page/client-login-page.component'
import {AccountComponent} from 'src/app/user/components/account/account.component'
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'menu', component: DishesListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderFormComponent},
  { path: 'admin', component: LoginComponent},
  { path: 'admin/page', component: AdminPageComponent, canActivate: [AuthAdminGuard]},
  { path: 'clientLogin', component: ClientLoginPageComponent},
  { path: 'account', component: AccountComponent, canActivate: [AuthAdminGuard]},
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent}
  
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
