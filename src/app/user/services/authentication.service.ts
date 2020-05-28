import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  url = 'https://cateringbackend.azurewebsites.net/Account/authenticate';
  //url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentClient')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
    return this.currentUserSubject.value;
  
  }
  login(username: string, password: string) {
    return this.http.post<any>(this.url, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentClient', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentClient');
    this.currentUserSubject.next(null);
}
}
