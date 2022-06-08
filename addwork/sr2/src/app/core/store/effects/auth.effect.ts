import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/service/auth.service';
import { AuthActionTypes } from './../actions/auth.action';
import * as authActions from './../actions/auth.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    mergeMap((action: authActions.Login) => this.authService.login(action.payload)
      .pipe(
        map((data) => {
          if (data.UserName && data.ID && data.LoggedIn === 1) {
            return new authActions.LoginSuccess(data);
          }
          return new authActions.LoginFail(data);
        }),
        tap(() => this.router.navigate(['/dashboard'])),
        catchError(error => of(new authActions.LoginFail(getErrorObj(error))))
      )
    )
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    mergeMap(() => this.authService.logout()
      .pipe(
        map((data) => {
          if (data.success) {
            return new authActions.LogoutSuccess(data);
          }
          return new authActions.LogoutFail(getErrorObj(data));
        }),
        catchError(error => {
          return of(new authActions.LogoutFail(getErrorObj(error)));
        })
      )
    )
  ));
}
