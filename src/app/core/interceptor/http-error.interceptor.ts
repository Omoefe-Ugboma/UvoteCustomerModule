import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorObj: any = { success: false, status: null };
        if (err.status === 401) {
          this.authService.logout();
          this.router.navigate(['auth/login']);
        }
        if (err.error instanceof ErrorEvent) {
          errorObj = { ...errorObj, message: err.error.message };
        } else {
          if (err && err.status === 0) {
            errorObj = { success: false, message: 'Please check your internet connection and try again', status: err.status };
          } else {
            if (err.error.errors) {
              const err_arr = err.error.errors;
              errorObj = {...errorObj, status: err.status, message: err_arr[Object.keys(err_arr)[0]][0] };
            } else {
              errorObj = {...errorObj, status: err.status, message: err.error.message };
            }
          }
        }
        return throwError({...err, ...errorObj});
      })
    );
  }
}
