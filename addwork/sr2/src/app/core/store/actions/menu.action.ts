import { Action } from '@ngrx/store';

export enum MenuActionTypes {
  LoadMenus = '[Menus] Load Menus',
  LoadMenusSuccess = '[Menus] Load Menus Success',
  LoadMenusFail = '[Menus] Load Menus Fail',

  CreateMenu = '[Menus] Create Menu',
  CreateMenuSuccess = '[Menus] Create Menu Success',
  CreateMenuFail = '[Menus] Create Menu Fail',

  UpdateMenu = '[Menus] Update Menu',
  UpdateMenuSuccess = '[Menus] Update Menu Success',
  UpdateMenuFail = '[Menus] Update Menu Fail',

  DeleteMenu = '[Menus] Delete Menu',
  DeleteMenuSuccess = '[Menus] Delete Menu Success',
  DeleteMenuFail = '[Menus] Delete Menu Fail',

  LoadMenuGroups = '[MenuGroup] Load MenuGroup',
  LoadMenuGroupsSuccess = '[MenuGroup] Load MenuGroup Success',
  LoadMenuGroupsFail = '[MenuGroup] Load MenuGroup Fail',

  CreateMenuGroup = '[MenuGroup] Create MenuGroup',
  CreateMenuGroupSuccess = '[MenuGroup] Create MenuGroup Success',
  CreateMenuGroupFail = '[MenuGroup] Create MenuGroup Fail',

  DeleteMenuGroup = '[MenuGroup] Delete MenuGroup',
  DeleteMenuGroupSuccess = '[MenuGroup] Delete MenuGroup Success',
  DeleteMenuGroupFail = '[MenuGroup] Delete MenuGroup Fail',

  ResetMenus = '[Menus] Reset Menu',
  ResetCRUDMenu = '[Menus] Reset Created Menu',
}

export class LoadMenus implements Action {
  readonly type = MenuActionTypes.LoadMenus;
}

export class LoadMenusSuccess implements Action {
  readonly type = MenuActionTypes.LoadMenusSuccess;
  constructor(public payload: any) {}
}

export class LoadMenusFail implements Action {
  readonly type = MenuActionTypes.LoadMenusFail;
  constructor(public payload: any) {}
}

export class ResetMenus implements Action {
  readonly type = MenuActionTypes.ResetMenus;
}

export class CreateMenu implements Action {
  readonly type = MenuActionTypes.CreateMenu;
  constructor(public payload: any) {}
}

export class CreateMenuSuccess implements Action {
  readonly type = MenuActionTypes.CreateMenuSuccess;
  constructor(public payload: any) {}
}

export class CreateMenuFail implements Action {
  readonly type = MenuActionTypes.CreateMenuFail;
  constructor(public payload: any) {}
}

export class UpdateMenu implements Action {
  readonly type = MenuActionTypes.UpdateMenu;
  constructor(public payload: any) {}
}

export class UpdateMenuSuccess implements Action {
  readonly type = MenuActionTypes.UpdateMenuSuccess;
  constructor(public payload: any) {}
}

export class UpdateMenuFail implements Action {
  readonly type = MenuActionTypes.UpdateMenuFail;
  constructor(public payload: any) {}
}

export class DeleteMenu implements Action {
  readonly type = MenuActionTypes.DeleteMenu;
  constructor(public payload: any) {}
}

export class DeleteMenuSuccess implements Action {
  readonly type = MenuActionTypes.DeleteMenuSuccess;
  constructor(public payload: any) {}
}

export class DeleteMenuFail implements Action {
  readonly type = MenuActionTypes.DeleteMenuFail;
  constructor(public payload: any) {}
}

export class LoadMenuGroups implements Action {
  readonly type = MenuActionTypes.LoadMenuGroups;
  constructor(public payload: any) {}
}

export class LoadMenuGroupsSuccess implements Action {
  readonly type = MenuActionTypes.LoadMenuGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadMenuGroupsFail implements Action {
  readonly type = MenuActionTypes.LoadMenuGroupsFail;
  constructor(public payload: any) {}
}

export class CreateMenuGroup implements Action {
  readonly type = MenuActionTypes.CreateMenuGroup;
  constructor(public payload: any) {}
}

export class CreateMenuGroupSuccess implements Action {
  readonly type = MenuActionTypes.CreateMenuGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateMenuGroupFail implements Action {
  readonly type = MenuActionTypes.CreateMenuGroupFail;
  constructor(public payload: any) {}
}

export class DeleteMenuGroup implements Action {
  readonly type = MenuActionTypes.DeleteMenuGroup;
  constructor(public payload: any) {}
}

export class DeleteMenuGroupSuccess implements Action {
  readonly type = MenuActionTypes.DeleteMenuGroupSuccess;
  constructor(public payload: any) {}
}

export class DeleteMenuGroupFail implements Action {
  readonly type = MenuActionTypes.DeleteMenuGroupFail;
  constructor(public payload: any) {}
}

export class ResetCRUDMenu implements Action {
  readonly type = MenuActionTypes.ResetCRUDMenu;
}

export type MenuActions = LoadMenus | LoadMenusSuccess | LoadMenusFail | ResetMenus | LoadMenuGroups | LoadMenuGroupsSuccess | LoadMenuGroupsFail |
  CreateMenu | CreateMenuSuccess | CreateMenuFail | DeleteMenu | DeleteMenuSuccess | DeleteMenuFail | ResetCRUDMenu |
  UpdateMenu | UpdateMenuSuccess | UpdateMenuFail | CreateMenuGroup | CreateMenuGroupSuccess | CreateMenuGroupFail | DeleteMenuGroup | DeleteMenuGroupSuccess | DeleteMenuGroupFail;
