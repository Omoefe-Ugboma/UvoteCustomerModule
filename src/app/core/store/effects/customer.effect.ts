import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { CustomerService } from 'src/app/core/service/customer.service';
import { CustomerActionTypes } from '../actions/customer.action';
import * as customerActions from '../actions/customer.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private customerService: CustomerService) { }

  customers$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.LoadAccountOfficers),
    mergeMap(() => this.customerService.getAccountOfficers()
      .pipe(
        map((data) => {
          
          if (data.status === true) {
            return new customerActions.LoadAccountOfficersSuccess(data.data);  
          }
          return new customerActions.LoadAccountOfficersFail(data);
        }),
        catchError(error => of(new customerActions.LoadAccountOfficersFail(error)))
      )
    )
  ));

  customersl$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.LoadCustomers),
    mergeMap((payload) => this.customerService.getCustomers()
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new customerActions.LoadCustomersSuccess(data.data.data);
          }
          return new customerActions.LoadCustomersFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.LoadCustomersFail(getErrorObj(error))))
      )
    )
  ));

  updatecustomer$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.UpdateCustomer),
    mergeMap((action: customerActions.UpdateCustomer) => this.customerService.updateCustomer(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerActions.UpdateCustomerSuccess(data);
          }
          return new customerActions.UpdateCustomerFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.UpdateCustomerFail(getErrorObj(error))))
      )
    )
  ));

  // customers2$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(CustomerActionTypes.LoadCustomersInDraftNotSub),
  //   mergeMap((payload) => this.customerService.getCustomersSubmittedForApproval()
  //     .pipe(
  //       map((data) => {
  //         console.log(data);
  //         if (data.status === true && data.code === 200) {
  //           return new customerActions.LoadCustomersInDraftNotSubSuccess(data.data.data);
  //         }
  //         return new customerActions.LoadCustomersInDraftNotSubFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new customerActions.LoadCustomersInDraftNotSubFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  createcustomer$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.CreateCustomerDraft),
    mergeMap((action: customerActions.CreateCustomerDraft) => this.customerService.createCustomerDraft(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerActions.CreateCustomerDraftSuccess(data);
          }
          return new customerActions.CreateCustomerDraftFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.CreateCustomerDraftFail(getErrorObj(error))))
      )
    )
  ));



}
