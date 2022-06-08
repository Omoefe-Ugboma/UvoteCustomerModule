import { Action } from '@ngrx/store';

export enum IdentificationActionTypes {
  LoadCustomerIdentification = '[CustomerIdentification] Load CustomerIdentification',
  LoadCustomerIdentificationSuccess = '[CustomerIdentification] Load CustomerIdentification Success',
  LoadCustomerIdentificationFail = '[CustomerIdentification] Load CustomerIdentification Fail',

  LoadCustomerIdentificationDetails = '[IdentificationDetails] Load IdentificationDetails',
  LoadCustomerIdentificationDetailsSuccess = '[IdentificationDetails] Load IdentificationDetails Success',
  LoadCustomerIdentificationDetailsFail = '[IdentificationDetails] Load IdentificationDetails Fail',

  CreateCustomerIdentification = '[CustomerIdentification] Create CustomerIdentification',
  CreateCustomerIdentificationSuccess = '[CustomerIdentification] Create CustomerIdentification Success',
  CreateCustomerIdentificationFail = '[CustomerIdentification] Create CustomerIdentification Fail',

  UpdateCustomerIdentification = '[CustomerIdentification] Update CustomerIdentification',
  UpdateCustomerIdentificationSuccess = '[CustomerIdentification] Update CustomerIdentification Success',
  UpdateCustomerIdentificationFail = '[CustomerIdentification] Update CustomerIdentification Fail',

  DeleteCustomerIdentification = '[CustomerIdentification] Delete CustomerIdentification',
  DeleteCustomerIdentificationSuccess = '[CustomerIdentification] Delete CustomerIdentification Success',
  DeleteCustomerIdentificationFail = '[CustomerIdentification] Delete CustomerIdentification Fail',


  ResetCustomerIdentification = '[CustomerIdentification] Reset CustomerIdentification',
  ResetCRUDCustomerIdentification = '[CustomerIdentification] Reset Created CustomerIdentification',
}

export class LoadCustomerIdentification implements Action {
  readonly type = IdentificationActionTypes.LoadCustomerIdentification;
}

export class LoadCustomerIdentificationSuccess implements Action {
  readonly type = IdentificationActionTypes.LoadCustomerIdentificationSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerIdentificationFail implements Action {
  readonly type = IdentificationActionTypes.LoadCustomerIdentificationFail;
  constructor(public payload: any) {}
}


export class LoadCustomerIdentificationDetails implements Action {
  readonly type = IdentificationActionTypes.LoadCustomerIdentificationDetails;
  payload: any;
}

export class LoadCustomerIdentificationDetailsSuccess implements Action {
  readonly type = IdentificationActionTypes.LoadCustomerIdentificationDetailsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerIdentificationDetailsFail implements Action {
  readonly type = IdentificationActionTypes.LoadCustomerIdentificationDetailsFail;
  constructor(public payload: any) {}
}

export class ResetCustomerIdentification implements Action {
  readonly type = IdentificationActionTypes.ResetCustomerIdentification;
}

export class CreateCustomerIdentification implements Action {
  readonly type = IdentificationActionTypes.CreateCustomerIdentification;
  constructor(public payload: any) {}
}

export class CreateCustomerIdentificationSuccess implements Action {
  readonly type = IdentificationActionTypes.CreateCustomerIdentificationSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerIdentificationFail implements Action {
  readonly type = IdentificationActionTypes.CreateCustomerIdentificationFail;
  constructor(public payload: any) {}
}

export class UpdateCustomerIdentification implements Action {
  readonly type = IdentificationActionTypes.UpdateCustomerIdentification;
  constructor(public payload: any) {}
}

export class UpdateCustomerIdentificationSuccess implements Action {
  readonly type = IdentificationActionTypes.UpdateCustomerIdentificationSuccess;
  constructor(public payload: any) {}
}

export class UpdateCustomerIdentificationFail implements Action {
  readonly type = IdentificationActionTypes.UpdateCustomerIdentificationFail;
  constructor(public payload: any) {}
}

export class DeleteCustomerIdentification implements Action {
  readonly type = IdentificationActionTypes.DeleteCustomerIdentification;
  constructor(public payload: any) {}
}

export class DeleteCustomerIdentificationSuccess implements Action {
  readonly type = IdentificationActionTypes.DeleteCustomerIdentificationSuccess;
  constructor(public payload: any) {}
}

export class DeleteCustomerIdentificationFail implements Action {
  readonly type = IdentificationActionTypes.DeleteCustomerIdentificationFail;
  constructor(public payload: any) {}
}


export class ResetCRUDCustomerIdentification implements Action {
  readonly type = IdentificationActionTypes.ResetCRUDCustomerIdentification;
}

export type IdentificationActions = 
  LoadCustomerIdentification 
| LoadCustomerIdentificationSuccess 
| LoadCustomerIdentificationFail
| LoadCustomerIdentificationDetails 
| LoadCustomerIdentificationDetailsSuccess 
| LoadCustomerIdentificationDetailsFail
| ResetCustomerIdentification 
| CreateCustomerIdentification 
| CreateCustomerIdentificationSuccess 
| CreateCustomerIdentificationFail 
| DeleteCustomerIdentification 
| DeleteCustomerIdentificationSuccess 
| DeleteCustomerIdentificationFail 
| ResetCRUDCustomerIdentification 
| UpdateCustomerIdentification 
| UpdateCustomerIdentificationSuccess 
| UpdateCustomerIdentificationFail;
