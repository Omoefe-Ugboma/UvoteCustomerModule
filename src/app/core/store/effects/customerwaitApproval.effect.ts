import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';


import { CustomerwaitApprovalActionTypes } from '../actions/customerWaitApproval.action copy';
import * as customerwaitApprovalActions from '../actions/customerWaitApproval.action copy';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';
import { CustomerdaService } from '../../service/customerda.service';

// import { CustomerdraftActionTypes } from '../actions/customerdraftnot.action';

@Injectable()
export class CustomerwaitApprovalEffects {
  constructor(private actions$: Actions, private customerdaService: CustomerdaService){}
  // constructor(private actions$: Actions, private customerdraftnotService: CustomerdraftnotService) { }


  customerdraft$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerwaitApprovalActionTypes.LoadCustomerswaitApproval),
    mergeMap((payload) => this.customerdaService.getCustomersWaitApproval()
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new customerwaitApprovalActions.LoadCustomerswaitApprovalSuccess(data.data.data);
          }
          return new customerwaitApprovalActions.LoadCustomerswaitApprovalFail(getErrorObj(data));
        }),
        catchError(error => of(new customerwaitApprovalActions.LoadCustomerswaitApprovalFail(getErrorObj(error))))
      )
    )
  ));


}
