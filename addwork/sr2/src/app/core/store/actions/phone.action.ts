import { Action } from '@ngrx/store';

export enum PhoneActionTypes {
  LoadCustomerPhone = '[CustomerPhone] Load CustomerPhone',
  LoadCustomerPhoneSuccess = '[CustomerPhone] Load CustomerPhone Success',
  LoadCustomerPhoneFail = '[CustomerPhone] Load CustomerPhone Fail',

  LoadCustomerPhoneDetails = '[PhoneDetails] Load PhoneDetails',
  LoadCustomerPhoneDetailsSuccess = '[PhoneDetails] Load PhoneDetails Success',
  LoadCustomerPhoneDetailsFail = '[PhoneDetails] Load PhoneDetails Fail',

  CreateCustomerPhone = '[CustomerPhone] Create CustomerPhone',
  CreateCustomerPhoneSuccess = '[CustomerPhone] Create CustomerPhone Success',
  CreateCustomerPhoneFail = '[CustomerPhone] Create CustomerPhone Fail',

  UpdateCustomerPhone = '[CustomerPhone] Update CustomerPhone',
  UpdateCustomerPhoneSuccess = '[CustomerPhone] Update CustomerPhone Success',
  UpdateCustomerPhoneFail = '[CustomerPhone] Update CustomerPhone Fail',

  DeleteCustomerPhone = '[CustomerPhone] Delete CustomerPhone',
  DeleteCustomerPhoneSuccess = '[CustomerPhone] Delete CustomerPhone Success',
  DeleteCustomerPhoneFail = '[CustomerPhone] Delete CustomerPhone Fail',


  ResetCustomerPhone = '[CustomerPhone] Reset CustomerPhone',
  ResetCRUDCustomerPhone = '[CustomerPhone] Reset Created CustomerPhone',
}

export class LoadCustomerPhone implements Action {
  readonly type = PhoneActionTypes.LoadCustomerPhone;
}

export class LoadCustomerPhoneSuccess implements Action {
  readonly type = PhoneActionTypes.LoadCustomerPhoneSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerPhoneFail implements Action {
  readonly type = PhoneActionTypes.LoadCustomerPhoneFail;
  constructor(public payload: any) {}
}


export class LoadCustomerPhoneDetails implements Action {
  readonly type = PhoneActionTypes.LoadCustomerPhoneDetails;
  payload: any;
}

export class LoadCustomerPhoneDetailsSuccess implements Action {
  readonly type = PhoneActionTypes.LoadCustomerPhoneDetailsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerPhoneDetailsFail implements Action {
  readonly type = PhoneActionTypes.LoadCustomerPhoneDetailsFail;
  constructor(public payload: any) {}
}

export class ResetCustomerPhone implements Action {
  readonly type = PhoneActionTypes.ResetCustomerPhone;
}

export class CreateCustomerPhone implements Action {
  readonly type = PhoneActionTypes.CreateCustomerPhone;
  constructor(public payload: any) {}
}

export class CreateCustomerPhoneSuccess implements Action {
  readonly type = PhoneActionTypes.CreateCustomerPhoneSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerPhoneFail implements Action {
  readonly type = PhoneActionTypes.CreateCustomerPhoneFail;
  constructor(public payload: any) {}
}

export class UpdateCustomerPhone implements Action {
  readonly type = PhoneActionTypes.UpdateCustomerPhone;
  constructor(public payload: any) {}
}

export class UpdateCustomerPhoneSuccess implements Action {
  readonly type = PhoneActionTypes.UpdateCustomerPhoneSuccess;
  constructor(public payload: any) {}
}

export class UpdateCustomerPhoneFail implements Action {
  readonly type = PhoneActionTypes.UpdateCustomerPhoneFail;
  constructor(public payload: any) {}
}

export class DeleteCustomerPhone implements Action {
  readonly type = PhoneActionTypes.DeleteCustomerPhone;
  constructor(public payload: any) {}
}

export class DeleteCustomerPhoneSuccess implements Action {
  readonly type = PhoneActionTypes.DeleteCustomerPhoneSuccess;
  constructor(public payload: any) {}
}

export class DeleteCustomerPhoneFail implements Action {
  readonly type = PhoneActionTypes.DeleteCustomerPhoneFail;
  constructor(public payload: any) {}
}


export class ResetCRUDCustomerPhone implements Action {
  readonly type = PhoneActionTypes.ResetCRUDCustomerPhone;
}

export type PhoneActions = 
  LoadCustomerPhone 
| LoadCustomerPhoneSuccess 
| LoadCustomerPhoneFail
| LoadCustomerPhoneDetails 
| LoadCustomerPhoneDetailsSuccess 
| LoadCustomerPhoneDetailsFail
| ResetCustomerPhone 
| CreateCustomerPhone 
| CreateCustomerPhoneSuccess 
| CreateCustomerPhoneFail 
| DeleteCustomerPhone 
| DeleteCustomerPhoneSuccess 
| DeleteCustomerPhoneFail 
| ResetCRUDCustomerPhone 
| UpdateCustomerPhone 
| UpdateCustomerPhoneSuccess 
| UpdateCustomerPhoneFail;
