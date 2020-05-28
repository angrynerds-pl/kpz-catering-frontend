import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientLoginPageComponent } from './components/client-login-page/client-login-page.component';

import { AccountComponent } from './components/account/account.component';
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component';



@NgModule({
  declarations: [ClientLoginPageComponent, AccountComponent, ClientRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
