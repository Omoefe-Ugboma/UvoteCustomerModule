import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { EmailService } from 'src/app/core/service/email.service';
import * as emailActions from '../actions/email.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';
import { EmailActionTypes } from '../actions/email.action';
// import { CreateCustomerEmail } from './../actions/email.action';

@Injectable()
export class CustomerEmailEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private emailService: EmailService) { }

  email$ = createEffect(() =>  this.actions$.pipe(
    ofType(EmailActionTypes.LoadCustomerEmail),
    mergeMap(() => this.emailService.getCustomerMail()
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new emailActions.LoadCustomerEmailSuccess(data.data.data);
          }
          return new emailActions.LoadCustomerEmailFail(getErrorObj(data));
        }),
        catchError(error => of(new emailActions.LoadCustomerEmailFail(getErrorObj(error))))
      )
    )
  ));


  customeremailOne$ = createEffect(() =>  this.actions$.pipe(
    ofType(EmailActionTypes.LoadCustomerEmailDetails),
    mergeMap((action: emailActions.LoadCustomerEmailDetails) => this.emailService.getCustomerEmailDetail(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new emailActions.LoadCustomerEmailDetailsSuccess(data.data);
          }
          return new emailActions.LoadCustomerEmailDetailsFail(getErrorObj(data));
        }),
        catchError(error => of(new emailActions.LoadCustomerEmailDetailsFail(getErrorObj(error))))
      )
    )
  ));

  createemail$ = createEffect(() =>  this.actions$.pipe(
    ofType(EmailActionTypes.CreateCustomerEmail),
    mergeMap((action: emailActions.CreateCustomerEmail) => this.emailService.createupdateCustomerMail(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new emailActions.CreateCustomerEmailSuccess(data);
          }
          return new emailActions.CreateCustomerEmailFail(getErrorObj(data));
        }),
        catchError(error => of(new emailActions.CreateCustomerEmailFail(getErrorObj(error))))
      )
    )
  ));

 
}
