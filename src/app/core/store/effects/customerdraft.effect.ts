import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { CustomerdService } from '../../service/customerd.service'
import { CustomerdraftActionTypes } from '../actions/customerdraftnot.action';
import * as customerdraftActions from '../actions/customerdraftnot.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';
// import { CustomerdraftActionTypes } from '../actions/customerdraftnot.action';

@Injectable()
export class CustomerdraftEffects {
  constructor(private actions$: Actions, private customerdService: CustomerdService){}
  // constructor(private actions$: Actions, private customerdraftnotService: CustomerdraftnotService) { }


  customerdraft$ = createEffect(() =>  this.actions$.pipe(
    ofType(CustomerdraftActionTypes.LoadCustomersInDraftNotSub),
    mergeMap((payload) => this.customerdService.getCustomersSubmittedForApproval()
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new customerdraftActions.LoadCustomersInDraftNotSubSuccess(data.data.data);
          }
          return new customerdraftActions.LoadCustomersInDraftNotSubFail(getErrorObj(data));
        }),
        catchError(error => of(new customerdraftActions.LoadCustomersInDraftNotSubFail(getErrorObj(error))))
      )
    )
  ));


}
