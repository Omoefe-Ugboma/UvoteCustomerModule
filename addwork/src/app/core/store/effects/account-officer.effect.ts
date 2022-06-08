import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { AccountOfficerActionTypes } from '../actions/account-officer.action';
import * as AccountOfficerActions from '../actions/account-officer.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';
import { AccountOfficerService } from '../../service/account-officer.service';

@Injectable()
export class AccountOfficerEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private account_officerService: AccountOfficerService) { }

  account_officers$ = createEffect(() =>  this.actions$.pipe(
    ofType(AccountOfficerActionTypes.LoadAccountOfficers),
    mergeMap(() => this.account_officerService.getAccountOfficers()
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new AccountOfficerActions.LoadAccountOfficersSuccess(data.data);
          }
          return new AccountOfficerActions.LoadAccountOfficersFail(getErrorObj(data));
        }),
        catchError(error => of(new AccountOfficerActions.LoadAccountOfficersFail(getErrorObj(error))))
      )
    )
  ));

  // createcustomer$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(CustomerActionTypes.CreateCustomer),
  //   mergeMap((action: CustomerActions.CreateCustomer) => this.customerService.createUpdateCustomer(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new CustomerActions.CreateCustomerSuccess(data);
  //         }
  //         return new CustomerActions.CreateCustomerFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new CustomerActions.CreateCustomerFail(getErrorObj(error))))
  //     )
  //   )
  // ));


  // customergroups$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(CustomerActionTypes.LoadCustomerGroups),
  //   mergeMap((action: CustomerActions.LoadCustomerGroups) => this.customerService.getCustomersGroups(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new CustomerActions.LoadCustomerGroupsSuccess(data.data);
  //         }
  //         return new CustomerActions.LoadCustomerGroupsFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new CustomerActions.LoadCustomerGroupsFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createcustomergroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(CustomerActionTypes.CreateCustomerGroup),
  //   mergeMap((action: CustomerActions.CreateCustomerGroup) => this.customerService.createCustomerGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new CustomerActions.CreateCustomerGroupSuccess(data);
  //         }
  //         return new CustomerActions.CreateCustomerGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new CustomerActions.CreateCustomerGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deletemodulegroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.DeleteModuleGroup),
  //   mergeMap((action: CustomerActions.DeleteModuleGroup) => this.moduleService.deleteModuleGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new CustomerActions.DeleteModuleGroupSuccess(data);
  //         }
  //         return new CustomerActions.DeleteModuleGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new CustomerActions.DeleteModuleGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));
}
