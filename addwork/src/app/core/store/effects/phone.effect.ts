import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { PhoneService } from 'src/app/core/service/phone.service';
import { PhoneActionTypes } from '../actions/phone.action';
import * as phoneActions from '../actions/phone.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class CustomerPhoneEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private phoneService: PhoneService) { }

  address$ = createEffect(() =>  this.actions$.pipe(
    ofType(PhoneActionTypes.LoadCustomerPhone),
    mergeMap(() => this.phoneService.getCustomerPhone()
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new phoneActions.LoadCustomerPhoneSuccess(data.data.data);
          }
          return new phoneActions.LoadCustomerPhoneFail(getErrorObj(data));
        }),
        catchError(error => of(new phoneActions.LoadCustomerPhoneFail(getErrorObj(error))))
      )
    )
  ));


  customerphoneOne$ = createEffect(() =>  this.actions$.pipe(
    ofType(PhoneActionTypes.LoadCustomerPhoneDetails),
    mergeMap((action: phoneActions.LoadCustomerPhoneDetails) => this.phoneService.getCustomerPhoneDetail(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new phoneActions.LoadCustomerPhoneDetailsSuccess(data.data);
          }
          return new phoneActions.LoadCustomerPhoneDetailsFail(getErrorObj(data));
        }),
        catchError(error => of(new phoneActions.LoadCustomerPhoneDetailsFail(getErrorObj(error))))
      )
    )
  ));

  createphone$ = createEffect(() =>  this.actions$.pipe(
    ofType(PhoneActionTypes.CreateCustomerPhone),
    mergeMap((action: phoneActions.CreateCustomerPhone) => this.phoneService.createupdateCustomerPhone(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new phoneActions.CreateCustomerPhoneSuccess(data);
          }
          return new phoneActions.CreateCustomerPhoneFail(getErrorObj(data));
        }),
        catchError(error => of(new phoneActions.CreateCustomerPhoneFail(getErrorObj(error))))
      )
    )
  ));

 
}
