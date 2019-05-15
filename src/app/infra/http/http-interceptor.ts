import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '@app/infra/authentication/authentication.service';


@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService
  ) {  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.getCredentials) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authenticationService.getCredentials.token}`
        }
      });

      return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
    } else {
      return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
    }
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    throw response;
  }
}
