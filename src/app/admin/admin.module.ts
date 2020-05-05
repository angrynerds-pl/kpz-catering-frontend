import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from './components/admin-page/admin-page.component';

@NgModule({
  declarations: [LoginComponent, AdminPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
