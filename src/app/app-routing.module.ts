import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesListComponent } from './core/dishes-list/dishes-list.component';
import { CartComponent } from './core/cart/cart.component';


const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', component: DishesListComponent },
  { path: 'cart', component: CartComponent },
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
