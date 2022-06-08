import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { NotificationService } from 'src/app/shared/service/notification.service';


@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private router: Router, private authService: AuthService, private notifyService: NotificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.authService.clearStore();
          this.router.navigate(['/auth/login/']);
          this.notifyService.showError(err.message || 'Opps!!! Session timed out');
        }
        return throwError(err);
      })
    );
  }
}
