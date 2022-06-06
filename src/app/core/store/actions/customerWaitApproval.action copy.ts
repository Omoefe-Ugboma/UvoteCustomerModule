import { Action } from '@ngrx/store';




export enum CustomerwaitApprovalActionTypes {
  LoadAccountOfficers = '[AccountOfficers] Load AccountOfficers',
  LoadAccountOfficersSuccess = '[AccountOfficers] Load AccountOfficers Success',
  LoadAccountOfficersFail = '[AccountOfficers] Load AccountOfficers Fail',

  // fetch all customers in draft not submitted for approval

  LoadCustomerswaitApproval = '[CustomerswaitApproval] Load CustomerswaitApproval',
  LoadCustomerswaitApprovalSuccess = '[LoadCustomerswaitApproval] Load LoadCustomerswaitApproval Success',
  LoadCustomerswaitApprovalFail = '[LoadCustomerswaitApprovalFail] Load LoadCustomerswaitApproval Fail',

  ResetCustomers = '[Customers] Reset Customer',
  ResetCRUDCustomer = '[Customers] Reset Created Customer',



}

export class LoadAccountOfficers implements Action {
  readonly type = CustomerwaitApprovalActionTypes.LoadAccountOfficers;
}

export class LoadAccountOfficersSuccess implements Action {
  readonly type = CustomerwaitApprovalActionTypes.LoadAccountOfficersSuccess;
  constructor(public payload: any) {}
}

export class LoadAccountOfficersFail implements Action {
  readonly type = CustomerwaitApprovalActionTypes.LoadAccountOfficersFail;
  constructor(public payload: any) {}
}



export class LoadCustomerswaitApproval implements Action {
  readonly type = CustomerwaitApprovalActionTypes.LoadCustomerswaitApproval;
}

export class LoadCustomerswaitApprovalSuccess implements Action {
  readonly type = CustomerwaitApprovalActionTypes.LoadCustomerswaitApprovalSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerswaitApprovalFail implements Action {
  readonly type = CustomerwaitApprovalActionTypes.LoadCustomerswaitApprovalFail;
  constructor(public payload: any) {}
}


export class ResetCustomers implements Action {
  readonly type = CustomerwaitApprovalActionTypes.ResetCustomers;
}

export class ResetCRUDCustomer implements Action {
  readonly type = CustomerwaitApprovalActionTypes.ResetCRUDCustomer;
}


export type CustomerwaitApprovalActions = LoadAccountOfficers 
| LoadAccountOfficersSuccess 
| LoadAccountOfficersFail 
// | LoadCustomers 
| ResetCustomers
| ResetCRUDCustomer
// | LoadCustomersSuccess 
// | LoadCustomersFail
| LoadCustomerswaitApproval
| LoadCustomerswaitApprovalSuccess
| LoadCustomerswaitApprovalFail
// | CreateCustomerDraft 
// | CreateCustomerDraftSuccess 
// |CreateCustomerDraftFail