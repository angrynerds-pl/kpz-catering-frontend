import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {AuthenticationService} from 'src/app/user/services/authentication.service';
@Component({
  selector: 'app-client-login-page',
  templateUrl: './client-login-page.component.html',
  styleUrls: ['./client-login-page.component.css']
})
export class ClientLoginPageComponent implements OnInit {
  
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';
  }
  onSubmit(userName, password) 
  {
    this.loading = true;
    this.authenticationService.login(userName, password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });  
  }

}
