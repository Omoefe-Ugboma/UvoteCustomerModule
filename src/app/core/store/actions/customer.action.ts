import { Action } from '@ngrx/store';




export enum CustomerActionTypes {
  LoadAccountOfficers = '[AccountOfficers] Load AccountOfficers',
  LoadAccountOfficersSuccess = '[AccountOfficers] Load AccountOfficers Success',
  LoadAccountOfficersFail = '[AccountOfficers] Load AccountOfficers Fail',

  LoadCustomers = '[Customers] Load Customers',
  LoadCustomersSuccess = '[Customers] Load Customers Success',
  LoadCustomersFail = '[Customers] Load Customers Fail',

  CreateCustomerDraft = '[Customers] Create Customer Draft',
  CreateCustomerDraftSuccess = '[Customers] Create Customer Draft Success',
  CreateCustomerDraftFail = '[Customers] Create Customer Draft Fail',

  UpdateCustomer = '[Customers] Update Customer',
  UpdateCustomerSuccess = '[Customers] Update Customer Success',
  UpdateCustomerFail = '[Customers] Update Customer Fail',

  // fetch all customers in draft not submitted for approval

  // LoadCustomersInDraftNotSub = '[CustomersNotSub] Load CustomersNotSub',
  // LoadCustomersInDraftNotSubSuccess = '[LoadCustomersInDraftNotSub] Load LoadCustomersInDraftNotSub Success',
  // LoadCustomersInDraftNotSubFail = '[LoadCustomersInDraftNotSub] Load LoadCustomersInDraftNotSub Fail',

  ResetCustomers = '[Customers] Reset Customer',
  ResetCRUDCustomer = '[Customers] Reset Created Customer',



}

export class LoadAccountOfficers implements Action {
  readonly type = CustomerActionTypes.LoadAccountOfficers;
}

export class LoadAccountOfficersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadAccountOfficersSuccess;
  constructor(public payload: any) {}
}

export class LoadAccountOfficersFail implements Action {
  readonly type = CustomerActionTypes.LoadAccountOfficersFail;
  constructor(public payload: any) {}
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomersFail;
  constructor(public payload: any) {}
}


// export class LoadCustomersInDraftNotSub implements Action {
//   readonly type = CustomerActionTypes.LoadCustomersInDraftNotSub;
// }

// export class LoadCustomersInDraftNotSubSuccess implements Action {
//   readonly type = CustomerActionTypes.LoadCustomersInDraftNotSubSuccess;
//   constructor(public payload: any) {}
// }

// export class LoadCustomersInDraftNotSubFail implements Action {
//   readonly type = CustomerActionTypes.LoadCustomersInDraftNotSubFail;
//   constructor(public payload: any) {}
// }


export class ResetCustomers implements Action {
  readonly type = CustomerActionTypes.ResetCustomers;
}


export class CreateCustomerDraft implements Action {
  readonly type = CustomerActionTypes.CreateCustomerDraft;
  constructor(public payload: any) {}
}

export class CreateCustomerDraftSuccess implements Action {
  readonly type = CustomerActionTypes.CreateCustomerDraftSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerDraftFail implements Action {
  readonly type = CustomerActionTypes.CreateCustomerDraftFail;
  constructor(public payload: any) {}
}


// Update customer
export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UpdateCustomer;
  constructor(public payload: any) {}
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerSuccess;
  constructor(public payload: any) {}
}

export class UpdateCustomerFail implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerFail;
  constructor(public payload: any) {}
}

export class ResetCRUDCustomer implements Action {
  readonly type = CustomerActionTypes.ResetCRUDCustomer;
}


export type CustomerActions = LoadAccountOfficers 
| LoadAccountOfficersSuccess 
| LoadAccountOfficersFail 
| LoadCustomers 
| ResetCustomers
| ResetCRUDCustomer
| LoadCustomersSuccess 
| LoadCustomersFail
| UpdateCustomer
| UpdateCustomerSuccess
| UpdateCustomerFail
| CreateCustomerDraft 
| CreateCustomerDraftSuccess 
|CreateCustomerDraftFail