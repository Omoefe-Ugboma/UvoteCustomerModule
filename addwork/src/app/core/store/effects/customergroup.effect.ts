import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { CustomerGroupService } from 'src/app/core/service/customersgroup.service';
import { CustomerGroupActionTypes } from '../actions/customergroup.action';
import * as customerGroupActions from '../actions/customergroup.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class CustomerGroupEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private customerGroupService: CustomerGroupService) { }

  customergroups$ = createEffect(() =>  {
    return this.actions$.pipe(
      ofType(CustomerGroupActionTypes.LoadCustomerGroup),
      mergeMap(() => this.customerGroupService.getCustomerGroups()
        .pipe(
          map((data) => {
            if (data.status === true) {
              return new customerGroupActions.LoadCustomerGroupsSuccess(data.data);
            }
            return new customerGroupActions.LoadCustomerGroupsFail(getErrorObj(data));
          }),
          catchError(error => of(new customerGroupActions.LoadCustomerGroupsFail(getErrorObj(error))))
        )
      )
    )
  });

  createcustomergroup$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerGroupActionTypes.CreateCustomerGroup),
    mergeMap((action: customerGroupActions.CreateCustomerGroup) => this.customerGroupService.createCustomerGroups(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerGroupActions.CreateCustomerGroupSuccess(data);
          }
          return new customerGroupActions.CreateCustomerGroupFail(getErrorObj(data));
        }),
        catchError(error => of(new customerGroupActions.CreateCustomerGroupFail(getErrorObj(error))))
      )
    )
  ));

  updatecustomergroup$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerGroupActionTypes.UpdateCustomerGroup),
    mergeMap((action: customerGroupActions.UpdateCustomerGroup) => this.customerGroupService.updateCustomerGroups(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new customerGroupActions.UpdateCustomerGroup(data);
          }
          return new customerGroupActions.UpdateCustomerGroupFail(getErrorObj(data));
        }),
        catchError(error => of(new customerGroupActions.UpdateCustomerGroupFail(getErrorObj(error))))
      )
    )
  ));
}
