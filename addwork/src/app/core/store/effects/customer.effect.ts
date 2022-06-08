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
  constructor(
    private router: Router,
    private actions$: Actions,
    private customerService: CustomerService) { }

  customers$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.LoadCustomers),
    mergeMap(() => this.customerService.getCustomers()
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new customerActions.LoadCustomersSuccess(data.data);
          }
          return new customerActions.LoadCustomersFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.LoadCustomersFail(getErrorObj(error))))
      )
    )
  ));

  createcustomer$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.CreateCustomer),
    mergeMap((action: customerActions.CreateCustomer) => this.customerService.createCustomer(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerActions.CreateCustomerSuccess(data);
          }
          return new customerActions.CreateCustomerFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.CreateCustomerFail(getErrorObj(error))))
      )
    )
  ));

  deletecustomer$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.DeleteCustomer),
    mergeMap((action: customerActions.DeleteCustomer) => this.customerService.deleteCustomers(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerActions.DeleteCustomerSuccess(data);
          }
          return new customerActions.DeleteCustomerFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.DeleteCustomerFail(getErrorObj(error))))
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


  updatecreatecustomer$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.UpdateCreateCustomer),
    mergeMap((action: customerActions.UpdateCreateCustomer) => this.customerService.createUpdateCustomer(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerActions.UpdateCreateCustomerSuccess(data);
          }
          return new customerActions.UpdateCreateCustomerFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.UpdateCreateCustomerFail(getErrorObj(error))))
      )
    )
  ));

  customergroups$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.LoadCustomerGroups),
    mergeMap((action: customerActions.LoadCustomerGroups) => this.customerService.getCustomersGroups(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true) {
            console.log(data.data);
            return new customerActions.LoadCustomerGroupsSuccess(data.data);
          }
          return new customerActions.LoadCustomerGroupsFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.LoadCustomerGroupsFail(getErrorObj(error))))
      )
    )
  ));

  createcustomergroup$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.CreateCustomerGroup),
    mergeMap((action: customerActions.CreateCustomerGroup) => this.customerService.createCustomerGroup(action.payload)
      .pipe(
        map((data) => {
         
          if (data.status === true)  {
            return new customerActions.CreateCustomerGroupSuccess(data);
          }
          return new customerActions.CreateCustomerGroupFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.CreateCustomerGroupFail(getErrorObj(error))))
      )
    )
  ));

  deletecustomergroup$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.DeleteCustomerGroup),
    mergeMap((action: customerActions.DeleteCustomerGroup) => this.customerService.deleteCustomerGroup(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerActions.DeleteCustomerGroupSuccess(data);
          }
          return new customerActions.DeleteCustomerGroupFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.DeleteCustomerGroupFail(getErrorObj(error))))
      )
    )
  ));

  customers_detail$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.LoadCustomersDetail),
    mergeMap((action: customerActions.LoadCustomersDetail) => this.customerService.getCustomerDetails(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new customerActions.LoadCustomersDetailSuccess(data.data);
          }
          return new customerActions.LoadCustomersDetailFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.LoadCustomersDetailFail(getErrorObj(error))))
      )
    )
  ));

  customer_info$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerActionTypes.LoadCustomer),
    mergeMap((action: customerActions.LoadCustomer) => this.customerService.getCustomer(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new customerActions.LoadCustomerSuccess(data.data);
          }
          return new customerActions.LoadCustomerFail(getErrorObj(data));
        }),
        catchError(error => of(new customerActions.LoadCustomerFail(getErrorObj(error))))
      )
    )
  ));



}
