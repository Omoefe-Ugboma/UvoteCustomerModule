import { Action } from '@ngrx/store';

export enum CustomerGroupActionTypes {
  LoadCustomerGroup = '[CustomerGroups] Load CustomerGroups',
  LoadCustomerGroupsSuccess = '[CustomerGroups] Load CustomerGroups Success',
  LoadCustomerGroupsFail = '[CustomerGroups] Load CustomerGroups Fail',

  CreateCustomerGroup = '[CustomerGroup] Create CustomerGroup',
  CreateCustomerGroupSuccess = '[CustomerGroup] Create CustomerGroup Success',
  CreateCustomerGroupFail = '[CustomerGroup] Create CustomerGroup Fail',

  UpdateCustomerGroup = '[CustomerGroup] Update CustomerGroup',
  UpdateCustomerGroupSuccess = '[CustomerGroup] Update CustomerGroup Success',
  UpdateCustomerGroupFail = '[CustomerGroup] Update CustomerGroup Fail',

  ResetCustomerGroups = '[CustomerGroups] Reset CustomerGroups',
  ResetCRUDCustomerGroups = '[CustomerGroups] Reset Created CustomerGroups',
}

export class LoadCustomerGroup implements Action {
  readonly type = CustomerGroupActionTypes.LoadCustomerGroup;
}

export class LoadCustomerGroupsSuccess implements Action {
  readonly type = CustomerGroupActionTypes.LoadCustomerGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerGroupsFail implements Action {
  readonly type = CustomerGroupActionTypes.LoadCustomerGroupsFail;
  constructor(public payload: any) {}
}

export class ResetCustomerGroups implements Action {
  readonly type = CustomerGroupActionTypes.ResetCustomerGroups;
}

export class CreateCustomerGroup implements Action {
  readonly type = CustomerGroupActionTypes.CreateCustomerGroup;
  constructor(public payload: any) {}
}

export class CreateCustomerGroupSuccess implements Action {
  readonly type = CustomerGroupActionTypes.CreateCustomerGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateCustomerGroupFail implements Action {
  readonly type = CustomerGroupActionTypes.CreateCustomerGroupFail;
  constructor(public payload: any) {}
}

export class UpdateCustomerGroup implements Action {
  readonly type = CustomerGroupActionTypes.UpdateCustomerGroup;
  constructor(public payload: any) {}
}

export class UpdateCustomerGroupSuccess implements Action {
  readonly type = CustomerGroupActionTypes.UpdateCustomerGroupSuccess;
  constructor(public payload: any) {}
}

export class UpdateCustomerGroupFail implements Action {
  readonly type = CustomerGroupActionTypes.UpdateCustomerGroupFail;
  constructor(public payload: any) {}
}

export class ResetCRUDCustomerGroup implements Action {
  readonly type = CustomerGroupActionTypes.ResetCRUDCustomerGroups;
}

export type CustomerGroupActions = LoadCustomerGroup | LoadCustomerGroupsSuccess | LoadCustomerGroupsFail | ResetCustomerGroups |
  CreateCustomerGroup | CreateCustomerGroupSuccess | CreateCustomerGroupFail |  ResetCRUDCustomerGroup | UpdateCustomerGroup | UpdateCustomerGroupSuccess | UpdateCustomerGroupFail;
