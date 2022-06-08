import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersFail = '[Users] Load Users Fail',

  CreateUser = '[Users] Create User',
  CreateUserSuccess = '[Users] Create User Success',
  CreateUserFail = '[Users] Create User Fail',

  UpdateUser = '[Users] Update User',
  UpdateUserSuccess = '[Users] Update User Success',
  UpdateUserFail = '[Users] Update User Fail',

  DisableUser = '[Users] Disable User',
  DisableUserSuccess = '[Users] Disable User Success',
  DisableUserFail = '[Users] Disable User Fail',

  EnableUser = '[Users] Enable User',
  EnableUserSuccess = '[Users] Enable User Success',
  EnableUserFail = '[Users] Enable User Fail',

  ResetUserPassword = '[Users] Reset User Password',
  ResetUserPasswordSuccess = '[Users] Reset User Password Success',
  ResetUserPasswordFail = '[Users] Reset User Password Fail',

  LoadUserGroups = '[UserGroup] Load UserGroup',
  LoadUserGroupsSuccess = '[UserGroup] Load UserGroup Success',
  LoadUserGroupsFail = '[UserGroup] Load UserGroup Fail',

  CreateUserGroup = '[UserGroup] Create UserGroup',
  CreateUserGroupSuccess = '[UserGroup] Create UserGroup Success',
  CreateUserGroupFail = '[UserGroup] Create UserGroup Fail',

  DeleteUserGroup = '[UserGroup] Delete UserGroup',
  DeleteUserGroupSuccess = '[UserGroup] Delete UserGroup Success',
  DeleteUserGroupFail = '[UserGroup] Delete UserGroup Fail',

  ResetUsers = '[Users] Reset User',
  ResetCRUDUser = '[Users] Reset Created User',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: any) {}
}

export class LoadUsersFail implements Action {
  readonly type = UserActionTypes.LoadUsersFail;
  constructor(public payload: any) {}
}

export class ResetUsers implements Action {
  readonly type = UserActionTypes.ResetUsers;
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;
  constructor(public payload: any) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: any) {}
}

export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CreateUserFail;
  constructor(public payload: any) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;
  constructor(public payload: any) {}
}

export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UpdateUserFail;
  constructor(public payload: any) {}
}

export class DisableUser implements Action {
  readonly type = UserActionTypes.DisableUser;
  constructor(public payload: any) {}
}

export class DisableUserSuccess implements Action {
  readonly type = UserActionTypes.DisableUserSuccess;
  constructor(public payload: any) {}
}

export class DisableUserFail implements Action {
  readonly type = UserActionTypes.DisableUserFail;
  constructor(public payload: any) {}
}

export class EnableUser implements Action {
  readonly type = UserActionTypes.EnableUser;
  constructor(public payload: any) {}
}

export class EnableUserSuccess implements Action {
  readonly type = UserActionTypes.EnableUserSuccess;
  constructor(public payload: any) {}
}

export class EnableUserFail implements Action {
  readonly type = UserActionTypes.EnableUserFail;
  constructor(public payload: any) {}
}

export class ResetUserPassword implements Action {
  readonly type = UserActionTypes.ResetUserPassword;
  constructor(public payload: any) {}
}

export class ResetUserPasswordSuccess implements Action {
  readonly type = UserActionTypes.ResetUserPasswordSuccess;
  constructor(public payload: any) {}
}

export class LoadUserGroups implements Action {
  readonly type = UserActionTypes.LoadUserGroups;
  constructor(public payload: any) {}
}

export class LoadUserGroupsSuccess implements Action {
  readonly type = UserActionTypes.LoadUserGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadUserGroupsFail implements Action {
  readonly type = UserActionTypes.LoadUserGroupsFail;
  constructor(public payload: any) {}
}

export class CreateUserGroup implements Action {
  readonly type = UserActionTypes.CreateUserGroup;
  constructor(public payload: any) {}
}

export class CreateUserGroupSuccess implements Action {
  readonly type = UserActionTypes.CreateUserGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateUserGroupFail implements Action {
  readonly type = UserActionTypes.CreateUserGroupFail;
  constructor(public payload: any) {}
}

export class DeleteUserGroup implements Action {
  readonly type = UserActionTypes.DeleteUserGroup;
  constructor(public payload: any) {}
}

export class DeleteUserGroupSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserGroupSuccess;
  constructor(public payload: any) {}
}

export class DeleteUserGroupFail implements Action {
  readonly type = UserActionTypes.DeleteUserGroupFail;
  constructor(public payload: any) {}
}

export class ResetUserPasswordFail implements Action {
  readonly type = UserActionTypes.ResetUserPasswordFail;
  constructor(public payload: any) {}
}

export class ResetCRUDUser implements Action {
  readonly type = UserActionTypes.ResetCRUDUser;
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFail | ResetUsers | LoadUserGroups | LoadUserGroupsSuccess | LoadUserGroupsFail |
  CreateUser | CreateUserSuccess | CreateUserFail | DisableUser | DisableUserSuccess | DisableUserFail | ResetCRUDUser |
  UpdateUser | UpdateUserSuccess | UpdateUserFail | EnableUser | EnableUserSuccess | EnableUserFail | ResetUserPassword | ResetUserPasswordSuccess | ResetUserPasswordFail
  | CreateUserGroup | CreateUserGroupSuccess | CreateUserGroupFail | DeleteUserGroup | DeleteUserGroupSuccess | DeleteUserGroupFail;
