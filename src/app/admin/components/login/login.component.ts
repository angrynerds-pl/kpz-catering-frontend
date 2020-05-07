import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {  HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(userName, password) {
    this.loginService.userAuthentication(userName, password).subscribe(
      (data: any) => {
        localStorage.setItem('userToken', data.access_token);
        this.router.navigate(['/admin/page']);
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}
