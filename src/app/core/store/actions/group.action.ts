import { Action } from '@ngrx/store';

export enum GroupActionTypes {
  LoadGroups = '[Groups] Load Groups',
  LoadGroupsSuccess = '[Groups] Load Groups Success',
  LoadGroupsFail = '[Groups] Load Groups Fail',

  CreateGroup = '[Groups] Create Group',
  CreateGroupSuccess = '[Groups] Create Group Success',
  CreateGroupFail = '[Groups] Create Group Fail',

  UpdateGroup = '[Groups] Update Group',
  UpdateGroupSuccess = '[Groups] Update Group Success',
  UpdateGroupFail = '[Groups] Update Group Fail',

  ResetGroups = '[Groups] Reset Group',
  ResetCRUDGroup = '[Groups] Reset Created Group',
}

export class LoadGroups implements Action {
  readonly type = GroupActionTypes.LoadGroups;
}

export class LoadGroupsSuccess implements Action {
  readonly type = GroupActionTypes.LoadGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadGroupsFail implements Action {
  readonly type = GroupActionTypes.LoadGroupsFail;
  constructor(public payload: any) {}
}

export class ResetGroups implements Action {
  readonly type = GroupActionTypes.ResetGroups;
}

export class CreateGroup implements Action {
  readonly type = GroupActionTypes.CreateGroup;
  constructor(public payload: any) {}
}

export class CreateGroupSuccess implements Action {
  readonly type = GroupActionTypes.CreateGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateGroupFail implements Action {
  readonly type = GroupActionTypes.CreateGroupFail;
  constructor(public payload: any) {}
}

export class UpdateGroup implements Action {
  readonly type = GroupActionTypes.UpdateGroup;
  constructor(public payload: any) {}
}

export class UpdateGroupSuccess implements Action {
  readonly type = GroupActionTypes.UpdateGroupSuccess;
  constructor(public payload: any) {}
}

export class UpdateGroupFail implements Action {
  readonly type = GroupActionTypes.UpdateGroupFail;
  constructor(public payload: any) {}
}

export class ResetCRUDGroup implements Action {
  readonly type = GroupActionTypes.ResetCRUDGroup;
}

export type GroupActions = LoadGroups | LoadGroupsSuccess | LoadGroupsFail | ResetGroups |
  CreateGroup | CreateGroupSuccess | CreateGroupFail |  ResetCRUDGroup | UpdateGroup | UpdateGroupSuccess | UpdateGroupFail;
