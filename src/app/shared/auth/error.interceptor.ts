import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService} from 'src/app/user/services/authentication.service';
import {LoginService} from 'src/app/admin/services/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationServiceAdmin: LoginService, private authenticationServiceClient: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationServiceAdmin.logout();
                this.authenticationServiceClient.logout();
                location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}