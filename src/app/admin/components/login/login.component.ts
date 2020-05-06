import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.loginService.login(f.value).subscribe(
      data => console.log('Succes', data),
      error => console.error('error', error));
    this.router.navigate(['/admin/page']);
  }

}
