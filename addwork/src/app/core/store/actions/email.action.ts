import { Action } from '@ngrx/store';

export enum EmailActionTypes {
  LoadCustomerEmail = '[CustomerEmail] Load CustomerEmail',
  LoadCustomerEmailSuccess = '[CustomerEmail] Load CustomerEmail Success',
  LoadCustomerEmailFail = '[CustomerEmail] Load CustomerEmail Fail',

  LoadCustomerEmailDetails = '[EmailDetails] Load EmailDetails',
  LoadCustomerEmailDetailsSuccess = '[EmailDetails] Load EmailDetails Success',
  LoadCustomerEmailDetailsFail = '[EmailDetails] Load EmailDetails Fail',

  CreateCustomerEmail = '[CustomerEmail] Create CustomerEmail',
  CreateCustomerEmailSuccess = '[CustomerEmail] Create CustomerEmail Success',
  CreateCustomerEmailFail = '[CustomerEmail] Create CustomerEmail Fail',

  UpdateCustomerEmail = '[CustomerEmail] Update CustomerEmail',
  UpdateCustomerEmailSuccess = '[CustomerEmail] Update CustomerEmail Success',
  UpdateCustomerEmailFail = '[CustomerEmail] Update CustomerEmail Fail',

  DeleteCustomerEmail = '[CustomerEmail] Delete CustomerEmail',
  DeleteCustomerEmailSuccess = '[CustomerEmail] Delete CustomerEmail Success',
  DeleteCustomerEmailFail = '[CustomerEmail] Delete CustomerEmail Fail',


  ResetCustomerEmail = '[CustomerEmail] Reset CustomerEmail',
  ResetCRUDCustomerEmail = '[CustomerEmail] Reset Created CustomerEmail',
}

export class LoadCustomerEmail implements Action {
  readonly type = EmailActionTypes.LoadCustomerEmail;
}

export class LoadCustomerEmailSuccess implements Action {
  readonly type = EmailActionTypes.LoadCustomerEmailSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerEmailFail implements Action {
  readonly type = EmailActionTypes.LoadCustomerEmailFail;
  constructor(public payload: any) {}
}


export class LoadCustomerEmailDetails implements Action {
  readonly type = EmailActionTypes.LoadCustomerEmailDetails;
  payload: any;
}

export class LoadCustomerEmailDetailsSuccess implements Action {
  readonly type = EmailActionTypes.LoadCustomerEmailDetailsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerEmailDetailsFail implements Action {
  readonly type = EmailActionTypes.LoadCustomerEmailDetailsFail;
  constructor(public payload: any) {}
}

export class ResetCustomerEmail implements Action {
  readonly type = EmailActionTypes.ResetCustomerEmail;
}

export class CreateCustomerEmail implements Action {
  readonly type = EmailActionTypes.CreateCustomerEmail;
  constructor(public payload: any) {}
}

export class CreateCustomerEmailSuccess implements Action {
  readonly type = EmailActionTypes.CreateCustomerEmailSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerEmailFail implements Action {
  readonly type = EmailActionTypes.CreateCustomerEmailFail;
  constructor(public payload: any) {}
}

export class UpdateCustomerEmail implements Action {
  readonly type = EmailActionTypes.UpdateCustomerEmail;
  constructor(public payload: any) {}
}

export class UpdateCustomerEmailSuccess implements Action {
  readonly type = EmailActionTypes.UpdateCustomerEmailSuccess;
  constructor(public payload: any) {}
}

export class UpdateCustomerEmailFail implements Action {
  readonly type = EmailActionTypes.UpdateCustomerEmailFail;
  constructor(public payload: any) {}
}

export class DeleteCustomerEmail implements Action {
  readonly type = EmailActionTypes.DeleteCustomerEmail;
  constructor(public payload: any) {}
}

export class DeleteCustomerEmailSuccess implements Action {
  readonly type = EmailActionTypes.DeleteCustomerEmailSuccess;
  constructor(public payload: any) {}
}

export class DeleteCustomerEmailFail implements Action {
  readonly type = EmailActionTypes.DeleteCustomerEmailFail;
  constructor(public payload: any) {}
}


export class ResetCRUDCustomerEmail implements Action {
  readonly type = EmailActionTypes.ResetCRUDCustomerEmail;
}

export type EmailActions = 
  LoadCustomerEmail
| LoadCustomerEmailSuccess 
| LoadCustomerEmailFail
| LoadCustomerEmailDetails 
| LoadCustomerEmailDetailsSuccess 
| LoadCustomerEmailDetailsFail
| ResetCustomerEmail 
| CreateCustomerEmail 
| CreateCustomerEmailSuccess 
| CreateCustomerEmailFail 
| DeleteCustomerEmail 
| DeleteCustomerEmailSuccess 
| DeleteCustomerEmailFail 
| ResetCRUDCustomerEmail 
| UpdateCustomerEmail 
| UpdateCustomerEmailSuccess 
| UpdateCustomerEmailFail;
