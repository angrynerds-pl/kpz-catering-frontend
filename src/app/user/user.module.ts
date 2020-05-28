import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientLoginPageComponent } from './components/client-login-page/client-login-page.component';

import { AccountComponent } from './components/account/account.component';



@NgModule({
  declarations: [ClientLoginPageComponent, AccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
