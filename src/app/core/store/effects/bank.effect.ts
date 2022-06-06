import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { BankService } from 'src/app/core/service/bank.service';
import { BankActionTypes } from '../actions/bank.action';
import * as bankActions from '../actions/bank.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class BankEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private bankService: BankService) { }

  customerbanks$ = createEffect(() =>  this.actions$.pipe(
    ofType(BankActionTypes.LoadCustomerBanks),
    mergeMap(() => this.bankService.getCustomerBanks()
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new bankActions.LoadCustomerBanksSuccess(data.data);
          }
          return new bankActions.LoadCustomerBanksFail(getErrorObj(data));
        }),
        catchError(error => of(new bankActions.LoadCustomerBanksFail(getErrorObj(error))))
      )
    )
  ));

  customerbankdetail$ = createEffect(() =>  this.actions$.pipe(
    ofType(BankActionTypes.LoadCustomerBankDetails),
    mergeMap((action: bankActions.LoadCustomerBankDetails) => this.bankService.getCustomerBankDetail(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new bankActions.LoadCustomerBankDetailsSuccess(data.data);
          }
          return new bankActions.LoadCustomerBankDetailsFail(getErrorObj(data));
        }),
        catchError(error => of(new bankActions.LoadCustomerBankDetailsFail(getErrorObj(error))))
      )
    )
  ));



}
