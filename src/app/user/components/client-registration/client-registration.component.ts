import { Component, OnInit } from '@angular/core';
import { ClientInfo } from '../../../shared/models/ClientInfo';
import {NewUser} from '../../../shared/models/newUser';
import { Registration } from '../../../shared/models/registration';
import {RegisterService} from 'src/app/user/services/register.service';
import { Router } from '@angular/router';
import {Address} from 'src/app/shared/models/address';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})

export class ClientRegistrationComponent implements OnInit {

  //constructor() { }

 
userInfo = new ClientInfo();
userAddress = new Address();
registrationDetails: Registration = new Registration();
user = new NewUser();
constructor(public registerService: RegisterService,  private router: Router) { }


ngOnInit(): void {
}

makeOrder()
{
  this.registrationDetails.login = this.user.username;
  this.registrationDetails.password = this.user.password;
  this.registrationDetails.addres = this.userAddress;
  this.registrationDetails.client = this.userInfo;
}

onSubmit()
{
  this.makeOrder();
  this.registerService.postRegister(this.registrationDetails).subscribe(
    data => console.log('Succes', data),
    error => console.error('error', error));
  this.router.navigate(['/']);
}

}
