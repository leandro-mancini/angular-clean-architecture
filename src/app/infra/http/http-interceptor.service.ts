import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Validator, ValidationError } from 'ts.validator.fluent/dist';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
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

  private errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    let errs: any[] = [];

    switch (response.status) {
      case 400:
        console.log('Error', response.status);
        break;
      case 401:
        this.router.navigateByUrl('/login', { replaceUrl: true });
        break;
      case 404:
        errs.push(new ValidationError('', '', '<strong>404</strong>: O recurso requisitado não existe.'));
        break;
      case 406:
      case 409:
      case 500:
        console.log('Ocorreu um erro inesperado de servidor.');
        break;
    }

    return throwError(errs);
  }

}
