import { Action } from '@ngrx/store';

export enum AccountOfficerActionTypes {
  LoadAccountOfficers = '[AccountOfficers] Load AccountOfficers',
  LoadAccountOfficersSuccess = '[AccountOfficers] Load AccountOfficers Success',
  LoadAccountOfficersFail = '[AccountOfficers] Load AccountOfficers Fail',

//   CreateCustomer = '[Customers] Create Customer',
//   CreateCustomerSuccess = '[Customers] Create Customer Success',
//   CreateCustomerFail = '[Customers] Create Customer Fail',

//   UpdateCustomer = '[Customers] Update Customer',
//   UpdateCustomerSuccess = '[Customers] Update Customer Success',
//   UpdateCustomerFail = '[Customers] Update Customer Fail',

//   DeleteCustomer = '[Customers] Delete Customer',
//   DeleteCustomerSuccess = '[Customers] Delete Customer Success',
//   DeleteCustomerFail = '[Customers] Delete Customer Fail',

//   LoadCustomerGroups = '[CustomerGroup] Load CustomerGroup',
//   LoadCustomerGroupsSuccess = '[CustomerGroup] Load CustomerGroup Success',
//   LoadCustomerGroupsFail = '[CustomerGroup] Load CustomerGroup Fail',

//   CreateCustomerGroup = '[CustomerGroup] Create CustomerGroup',
//   CreateCustomerGroupSuccess = '[CustomerGroup] Create CustomerGroup Success',
//   CreateCustomerGroupFail = '[CustomerGroup] Create CustomerGroup Fail',

//   DeleteCustomerGroup = '[CustomerGroup] Delete CustomerGroup',
//   DeleteCustomerGroupSuccess = '[CustomerGroup] Delete CustomerGroup Success',
//   DeleteCustomerGroupFail = '[CustomerGroup] Delete CustomerGroup Fail',

  ResetAccountOfficers = '[AccountOfficers] Reset AccountOfficer',
  ResetCRUDAccountOfficer = '[AccountOfficers] Reset Created AccountOfficer',
 }

export class LoadAccountOfficers implements Action {
  readonly type = AccountOfficerActionTypes.LoadAccountOfficers;
}

export class LoadAccountOfficersSuccess implements Action {
  readonly type = AccountOfficerActionTypes.LoadAccountOfficersSuccess;
  constructor(public payload: any) {}
}

export class LoadAccountOfficersFail implements Action {
  readonly type = AccountOfficerActionTypes.LoadAccountOfficersFail;
  constructor(public payload: any) {}
}

// export class ResetCustomers implements Action {
//   readonly type = CustomerActionTypes.ResetCustomers;
// }

// export class CreateCustomer implements Action {
//   readonly type = CustomerActionTypes.CreateCustomer;
//   constructor(public payload: any) {}
// }

// export class CreateCustomerSuccess implements Action {
//   readonly type = CustomerActionTypes.CreateCustomerSuccess;
//   constructor(public payload: any) {}
// }

// export class CreateCustomerFail implements Action {
//   readonly type = CustomerActionTypes.CreateCustomerFail;
//   constructor(public payload: any) {}
// }

// export class UpdateCustomer implements Action {
//   readonly type = CustomerActionTypes.UpdateCustomer;
//   constructor(public payload: any) {}
// }

// export class UpdateCustomerSuccess implements Action {
//   readonly type = CustomerActionTypes.UpdateCustomerSuccess;
//   constructor(public payload: any) {}
// }

// export class UpdateCustomerFail implements Action {
//   readonly type = CustomerActionTypes.UpdateCustomerFail;
//   constructor(public payload: any) {}
// }

// export class DeleteCustomer implements Action {
//   readonly type = CustomerActionTypes.DeleteCustomer;
//   constructor(public payload: any) {}
// }

// export class DeleteCustomerSuccess implements Action {
//   readonly type = CustomerActionTypes.DeleteCustomerSuccess;
//   constructor(public payload: any) {}
// }

// export class DeleteCustomerFail implements Action {
//   readonly type = CustomerActionTypes.DeleteCustomerFail;
//   constructor(public payload: any) {}
// }

// export class LoadCustomerGroups implements Action {
//   readonly type = CustomerActionTypes.LoadCustomerGroups;
//   constructor(public payload: any) {}
// }

// export class LoadCustomerGroupsSuccess implements Action {
//   readonly type = CustomerActionTypes.LoadCustomerGroupsSuccess;
//   constructor(public payload: any) {}
// }

// export class LoadCustomerGroupsFail implements Action {
//   readonly type = CustomerActionTypes.LoadCustomerGroupsFail;
//   constructor(public payload: any) {}
// }

// export class CreateCustomerGroup implements Action {
//   readonly type = CustomerActionTypes.CreateCustomerGroup;
//   constructor(public payload: any) {}
// }

// export class CreateCustomerGroupSuccess implements Action {
//   readonly type = CustomerActionTypes.CreateCustomerGroupSuccess;
//   constructor(public payload: any) {}
// }

// export class CreateCustomerGroupFail implements Action {
//   readonly type = CustomerActionTypes.CreateCustomerGroupFail;
//   constructor(public payload: any) {}
// }

// export class DeleteCustomerGroup implements Action {
//   readonly type = CustomerActionTypes.DeleteCustomerGroup;
//   constructor(public payload: any) {}
// }

// export class DeleteCustomerGroupSuccess implements Action {
//   readonly type = CustomerActionTypes.DeleteCustomerGroupSuccess;
//   constructor(public payload: any) {}
// }

// export class DeleteCustomerGroupFail implements Action {
//   readonly type = CustomerActionTypes.DeleteCustomerGroupFail;
//   constructor(public payload: any) {}
// }

export class ResetCRUDAccountOfficer implements Action {
  readonly type = AccountOfficerActionTypes.ResetCRUDAccountOfficer;
}

export type AccountOfficerActions = LoadAccountOfficers | LoadAccountOfficersSuccess | LoadAccountOfficersFail | ResetCRUDAccountOfficer

// export type CustomerActions = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail | ResetCustomers | LoadCustomerGroups | LoadCustomerGroupsSuccess | LoadCustomerGroupsFail |
//   CreateCustomer | CreateCustomerSuccess | CreateCustomerFail | DeleteCustomer | DeleteCustomerSuccess | DeleteCustomerFail | ResetCRUDCustomer |
//   UpdateCustomer | UpdateCustomerSuccess | UpdateCustomerFail | CreateCustomerGroup | CreateCustomerGroupSuccess | CreateCustomerGroupFail | DeleteCustomerGroup | DeleteCustomerGroupSuccess | DeleteCustomerGroupFail;
