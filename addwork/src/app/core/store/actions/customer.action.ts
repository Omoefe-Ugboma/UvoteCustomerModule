import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  LoadCustomers = '[Customers] Load Customers',
  LoadCustomersSuccess = '[Customers] Load Customers Success',
  LoadCustomersFail = '[Customers] Load Customers Fail',

  LoadCustomer = '[Customer] Load Customers',
  LoadCustomerSuccess = '[Customer] Load Customer Success',
  LoadCustomerFail = '[Customer] Load Customer Fail',

  LoadCustomersDetail = '[CustomersDetail] Load CustomersDetail',
  LoadCustomersDetailSuccess = '[CustomersDetail] Load CustomersDetail Success',
  LoadCustomersDetailFail = '[CustomersDetail] Load CustomersDetail Fail',

  CreateCustomer = '[Customers] Create Customer',
  CreateCustomerSuccess = '[Customers] Create Customer Success',
  CreateCustomerFail = '[Customers] Create Customer Fail',

  UpdateCustomer = '[Customers] Update Customer',
  UpdateCustomerSuccess = '[Customers] Update Customer Success',
  UpdateCustomerFail = '[Customers] Update Customer Fail',

  UpdateCreateCustomer = '[Customer Update] Update Create Customer',
  UpdateCreateCustomerSuccess = '[Customer Create Update ] Update Create Customer Success',
  UpdateCreateCustomerFail = '[Customers Create] Update Create Customer Fail',

  DeleteCustomer = '[Customers] Delete Customer',
  DeleteCustomerSuccess = '[Customers] Delete Customer Success',
  DeleteCustomerFail = '[Customers] Delete Customer Fail',

  LoadCustomerGroups = '[CustomerGroup] Load CustomerGroup',
  LoadCustomerGroupsSuccess = '[CustomerGroup] Load CustomerGroup Success',
  LoadCustomerGroupsFail = '[CustomerGroup] Load CustomerGroup Fail',

  CreateCustomerGroup = '[CustomerGroup] Create CustomerGroup',
  CreateCustomerGroupSuccess = '[CustomerGroup] Create CustomerGroup Success',
  CreateCustomerGroupFail = '[CustomerGroup] Create CustomerGroup Fail',

  DeleteCustomerGroup = '[CustomerGroup] Delete CustomerGroup',
  DeleteCustomerGroupSuccess = '[CustomerGroup] Delete CustomerGroup Success',
  DeleteCustomerGroupFail = '[CustomerGroup] Delete CustomerGroup Fail',

  ResetCustomers = '[Customers] Reset Customer',
  ResetCRUDCustomer = '[Customers] Reset Created Customer',
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


export class LoadCustomer implements Action {
  readonly type = CustomerActionTypes.LoadCustomer;
  constructor(public payload: any) {}
}

export class LoadCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomerSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomerFail;
  constructor(public payload: any) {}
}



export class LoadCustomersDetail implements Action {
  readonly type = CustomerActionTypes.LoadCustomersDetail;
  constructor(public payload: any) {}
}

export class LoadCustomersDetailSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersDetailSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomersDetailFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomersDetailFail;
  constructor(public payload: any) {}
}

export class ResetCustomers implements Action {
  readonly type = CustomerActionTypes.ResetCustomers;
}

export class CreateCustomer implements Action {
  readonly type = CustomerActionTypes.CreateCustomer;
  constructor(public payload: any) {}
}

export class CreateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.CreateCustomerSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerFail implements Action {
  readonly type = CustomerActionTypes.CreateCustomerFail;
  constructor(public payload: any) {}
}

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


export class UpdateCreateCustomer implements Action {
  readonly type = CustomerActionTypes.UpdateCreateCustomer;
  constructor(public payload: any) {}
}

export class UpdateCreateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UpdateCreateCustomerSuccess;
  constructor(public payload: any) {}
}

export class UpdateCreateCustomerFail implements Action {
  readonly type = CustomerActionTypes.UpdateCreateCustomerFail;
  constructor(public payload: any) {}
}


export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DeleteCustomer;
  constructor(public payload: any) {}
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerSuccess;
  constructor(public payload: any) {}
}

export class DeleteCustomerFail implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerFail;
  constructor(public payload: any) {}
}

export class LoadCustomerGroups implements Action {
  readonly type = CustomerActionTypes.LoadCustomerGroups;
  constructor(public payload: any) {}
}

export class LoadCustomerGroupsSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomerGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerGroupsFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomerGroupsFail;
  constructor(public payload: any) {}
}

export class CreateCustomerGroup implements Action {
  readonly type = CustomerActionTypes.CreateCustomerGroup;
  constructor(public payload: any) {}
}

export class CreateCustomerGroupSuccess implements Action {
  readonly type = CustomerActionTypes.CreateCustomerGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerGroupFail implements Action {
  readonly type = CustomerActionTypes.CreateCustomerGroupFail;
  constructor(public payload: any) {}
}

export class DeleteCustomerGroup implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerGroup;
  constructor(public payload: any) {}
}

export class DeleteCustomerGroupSuccess implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerGroupSuccess;
  constructor(public payload: any) {}
}

export class DeleteCustomerGroupFail implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerGroupFail;
  constructor(public payload: any) {}
}

export class ResetCRUDCustomer implements Action {
  readonly type = CustomerActionTypes.ResetCRUDCustomer;
}

export type CustomerActions = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail | ResetCustomers | LoadCustomerGroups | LoadCustomerGroupsSuccess | LoadCustomerGroupsFail |
  CreateCustomer | CreateCustomerSuccess | CreateCustomerFail | DeleteCustomer | DeleteCustomerSuccess | DeleteCustomerFail | ResetCRUDCustomer | LoadCustomersDetail | LoadCustomersDetailSuccess | LoadCustomersDetailFail |
  UpdateCustomer | UpdateCustomerSuccess | UpdateCustomerFail | UpdateCreateCustomer | UpdateCreateCustomerSuccess | UpdateCreateCustomerFail| CreateCustomerGroup | CreateCustomerGroupSuccess | CreateCustomerGroupFail | DeleteCustomerGroup | DeleteCustomerGroupSuccess | DeleteCustomerGroupFail 
  | LoadCustomer | LoadCustomerSuccess | LoadCustomerFail;
