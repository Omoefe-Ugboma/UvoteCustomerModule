import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { AddressService } from 'src/app/core/service/address.service';
import { AddressActionTypes } from '../actions/address.action';
import * as addressActions from '../actions/address.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class CustomerAddressEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private addressService: AddressService) { }

  address$ = createEffect(() =>  this.actions$.pipe(
    ofType(AddressActionTypes.LoadCustomerAddress),
    mergeMap(() => this.addressService.getCustomerAddress()
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new addressActions.LoadCustomerAddressSuccess(data.data.data);
          }
          return new addressActions.LoadCustomerAddressFail(getErrorObj(data));
        }),
        catchError(error => of(new addressActions.LoadCustomerAddressFail(getErrorObj(error))))
      )
    )
  ));


  customeraddressOne$ = createEffect(() =>  this.actions$.pipe(
    ofType(AddressActionTypes.LoadCustomerAddressDetails),
    mergeMap((action: addressActions.LoadCustomerAddressDetails) => this.addressService.getCustomerAddressDetail(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true && data.code === 200) {
            return new addressActions.LoadCustomerAddressDetailsSuccess(data.data);
          }
          return new addressActions.LoadCustomerAddressDetailsFail(getErrorObj(data));
        }),
        catchError(error => of(new addressActions.LoadCustomerAddressDetailsFail(getErrorObj(error))))
      )
    )
  ));

  createaddress$ = createEffect(() =>  this.actions$.pipe(
    ofType(AddressActionTypes.CreateCustomerAddress),
    mergeMap((action: addressActions.CreateCustomerAddress) => this.addressService.createupdateCustomerAddress(action.payload)
      .pipe(
        map((data) => {
          if (data.status === true)  {
            return new addressActions.CreateCustomerAddressSuccess(data);
          }
          return new addressActions.CreateCustomerAddressFail(getErrorObj(data));
        }),
        catchError(error => of(new addressActions.CreateCustomerAddressFail(getErrorObj(error))))
      )
    )
  ));

 
}
