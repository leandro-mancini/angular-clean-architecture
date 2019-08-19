import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.credentials) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.credentials.token}`
        }
      });

      return next.handle(req).pipe(catchError(error => this.errorHandler(error)));
    } else {
      return next.handle(req).pipe(catchError(error => this.errorHandler(error)));
    }
  }

  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    throw response;
  }

}
