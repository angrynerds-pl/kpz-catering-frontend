import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import {LoginService} from 'src/app/admin/services/login.service';
import { AuthenticationService} from 'src/app/user/services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationServiceAdmin: LoginService, private authenticationServiceClient: AuthenticationService ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUserAdmin = this.authenticationServiceAdmin.currentUserValue;
        let currentUserClient = this.authenticationServiceClient.currentUserValue;
        if (currentUserAdmin && currentUserAdmin.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUserAdmin.token}`
                }
            });
        }
        else if(currentUserClient && currentUserClient.token)
        {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUserClient.token}`
                }
            });
        }
        return next.handle(request);
}
}