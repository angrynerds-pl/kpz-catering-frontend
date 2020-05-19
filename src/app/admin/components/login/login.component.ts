import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
  
  constructor(private authenticationService: LoginService, private router: Router, private route: ActivatedRoute) 
  { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) 
    { 
      this.router.navigate(['/admin/page']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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
