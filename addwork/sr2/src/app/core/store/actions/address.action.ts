import { Action } from '@ngrx/store';

export enum AddressActionTypes {
  LoadCustomerAddress = '[CustomerAddress] Load CustomerAddress',
  LoadCustomerAddressSuccess = '[CustomerAddress] Load CustomerAddress Success',
  LoadCustomerAddressFail = '[CustomerAddress] Load CustomerAddress Fail',

  LoadCustomerAddressDetails = '[AddressDetails] Load AddressDetails',
  LoadCustomerAddressDetailsSuccess = '[AddressDetails] Load AddressDetails Success',
  LoadCustomerAddressDetailsFail = '[AddressDetails] Load AddressDetails Fail',

  CreateCustomerAddress = '[CustomerAddress] Create CustomerAddress',
  CreateCustomerAddressSuccess = '[CustomerAddress] Create CustomerAddress Success',
  CreateCustomerAddressFail = '[CustomerAddress] Create CustomerAddress Fail',

  UpdateCustomerAddress = '[CustomerAddress] Update CustomerAddress',
  UpdateCustomerAddressSuccess = '[CustomerAddress] Update CustomerAddress Success',
  UpdateCustomerAddressFail = '[CustomerAddress] Update CustomerAddress Fail',

  DeleteCustomerAddress = '[CustomerAddress] Delete CustomerAddress',
  DeleteCustomerAddressSuccess = '[CustomerAddress] Delete CustomerAddress Success',
  DeleteCustomerAddressFail = '[CustomerAddress] Delete CustomerAddress Fail',


  ResetCustomerAddress = '[CustomerAddress] Reset CustomerAddress',
  ResetCRUDCustomerAddress = '[CustomerAddress] Reset Created CustomerAddress',
}

export class LoadCustomerAddress implements Action {
  readonly type = AddressActionTypes.LoadCustomerAddress;
}

export class LoadCustomerAddressSuccess implements Action {
  readonly type = AddressActionTypes.LoadCustomerAddressSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerAddressFail implements Action {
  readonly type = AddressActionTypes.LoadCustomerAddressFail;
  constructor(public payload: any) {}
}


export class LoadCustomerAddressDetails implements Action {
  readonly type = AddressActionTypes.LoadCustomerAddressDetails;
  payload: any;
}

export class LoadCustomerAddressDetailsSuccess implements Action {
  readonly type = AddressActionTypes.LoadCustomerAddressDetailsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerAddressDetailsFail implements Action {
  readonly type = AddressActionTypes.LoadCustomerAddressDetailsFail;
  constructor(public payload: any) {}
}

export class ResetCustomerAddress implements Action {
  readonly type = AddressActionTypes.ResetCustomerAddress;
}

export class CreateCustomerAddress implements Action {
  readonly type = AddressActionTypes.CreateCustomerAddress;
  constructor(public payload: any) {}
}

export class CreateCustomerAddressSuccess implements Action {
  readonly type = AddressActionTypes.CreateCustomerAddressSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerAddressFail implements Action {
  readonly type = AddressActionTypes.CreateCustomerAddressFail;
  constructor(public payload: any) {}
}

export class UpdateCustomerAddress implements Action {
  readonly type = AddressActionTypes.UpdateCustomerAddress;
  constructor(public payload: any) {}
}

export class UpdateCustomerAddressSuccess implements Action {
  readonly type = AddressActionTypes.UpdateCustomerAddressSuccess;
  constructor(public payload: any) {}
}

export class UpdateCustomerAddressFail implements Action {
  readonly type = AddressActionTypes.UpdateCustomerAddressFail;
  constructor(public payload: any) {}
}

export class DeleteCustomerAddress implements Action {
  readonly type = AddressActionTypes.DeleteCustomerAddress;
  constructor(public payload: any) {}
}

export class DeleteCustomerAddressSuccess implements Action {
  readonly type = AddressActionTypes.DeleteCustomerAddressSuccess;
  constructor(public payload: any) {}
}

export class DeleteCustomerAddressFail implements Action {
  readonly type = AddressActionTypes.DeleteCustomerAddressFail;
  constructor(public payload: any) {}
}


export class ResetCRUDCustomerAddress implements Action {
  readonly type = AddressActionTypes.ResetCRUDCustomerAddress;
}

export type AddressActions = 
  LoadCustomerAddress 
| LoadCustomerAddressSuccess 
| LoadCustomerAddressFail
| LoadCustomerAddressDetails 
| LoadCustomerAddressDetailsSuccess 
| LoadCustomerAddressDetailsFail
| ResetCustomerAddress 
| CreateCustomerAddress 
| CreateCustomerAddressSuccess 
| CreateCustomerAddressFail 
| DeleteCustomerAddress 
| DeleteCustomerAddressSuccess 
| DeleteCustomerAddressFail 
| ResetCRUDCustomerAddress 
| UpdateCustomerAddress 
| UpdateCustomerAddressSuccess 
| UpdateCustomerAddressFail;
