import { Action } from '@ngrx/store';




export enum CustomerdraftActionTypes {
  LoadAccountOfficers = '[AccountOfficers] Load AccountOfficers',
  LoadAccountOfficersSuccess = '[AccountOfficers] Load AccountOfficers Success',
  LoadAccountOfficersFail = '[AccountOfficers] Load AccountOfficers Fail',

  // fetch all customers in draft not submitted for approval

  LoadCustomersInDraftNotSub = '[CustomersNotSub] Load CustomersNotSub',
  LoadCustomersInDraftNotSubSuccess = '[LoadCustomersInDraftNotSub] Load LoadCustomersInDraftNotSub Success',
  LoadCustomersInDraftNotSubFail = '[LoadCustomersInDraftNotSub] Load LoadCustomersInDraftNotSub Fail',

  ResetCustomers = '[Customers] Reset Customer',
  ResetCRUDCustomer = '[Customers] Reset Created Customer',



}

export class LoadAccountOfficers implements Action {
  readonly type = CustomerdraftActionTypes.LoadAccountOfficers;
}

export class LoadAccountOfficersSuccess implements Action {
  readonly type = CustomerdraftActionTypes.LoadAccountOfficersSuccess;
  constructor(public payload: any) {}
}

export class LoadAccountOfficersFail implements Action {
  readonly type = CustomerdraftActionTypes.LoadAccountOfficersFail;
  constructor(public payload: any) {}
}



export class LoadCustomersInDraftNotSub implements Action {
  readonly type = CustomerdraftActionTypes.LoadCustomersInDraftNotSub;
}

export class LoadCustomersInDraftNotSubSuccess implements Action {
  readonly type = CustomerdraftActionTypes.LoadCustomersInDraftNotSubSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomersInDraftNotSubFail implements Action {
  readonly type = CustomerdraftActionTypes.LoadCustomersInDraftNotSubFail;
  constructor(public payload: any) {}
}


export class ResetCustomers implements Action {
  readonly type = CustomerdraftActionTypes.ResetCustomers;
}

export class ResetCRUDCustomer implements Action {
  readonly type = CustomerdraftActionTypes.ResetCRUDCustomer;
}


export type CustomerdraftActions = LoadAccountOfficers 
| LoadAccountOfficersSuccess 
| LoadAccountOfficersFail 
// | LoadCustomers 
| ResetCustomers
| ResetCRUDCustomer
// | LoadCustomersSuccess 
// | LoadCustomersFail
| LoadCustomersInDraftNotSub
| LoadCustomersInDraftNotSubSuccess
| LoadCustomersInDraftNotSubFail
// | CreateCustomerDraft 
// | CreateCustomerDraftSuccess 
// |CreateCustomerDraftFail