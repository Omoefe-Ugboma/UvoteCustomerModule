import { Action } from '@ngrx/store';

export enum ModuleActionTypes {
  LoadModules = '[Modules] Load Modules',
  LoadModulesSuccess = '[Modules] Load Modules Success',
  LoadModulesFail = '[Modules] Load Modules Fail',

  CreateModule = '[Modules] Create Module',
  CreateModuleSuccess = '[Modules] Create Module Success',
  CreateModuleFail = '[Modules] Create Module Fail',

  UpdateModule = '[Modules] Update Module',
  UpdateModuleSuccess = '[Modules] Update Module Success',
  UpdateModuleFail = '[Modules] Update Module Fail',

  LoadModuleGroups = '[ModuleGroup] Load ModuleGroup',
  LoadModuleGroupsSuccess = '[ModuleGroup] Load ModuleGroup Success',
  LoadModuleGroupsFail = '[ModuleGroup] Load ModuleGroup Fail',

  CreateModuleGroup = '[ModuleGroup] Create ModuleGroup',
  CreateModuleGroupSuccess = '[ModuleGroup] Create ModuleGroup Success',
  CreateModuleGroupFail = '[ModuleGroup] Create ModuleGroup Fail',

  DeleteModuleGroup = '[ModuleGroup] Delete ModuleGroup',
  DeleteModuleGroupSuccess = '[ModuleGroup] Delete ModuleGroup Success',
  DeleteModuleGroupFail = '[ModuleGroup] Delete ModuleGroup Fail',

  ResetModules = '[Modules] Reset Module',
  ResetCRUDModule = '[Modules] Reset Created Module',
}

export class LoadModules implements Action {
  readonly type = ModuleActionTypes.LoadModules;
}

export class LoadModulesSuccess implements Action {
  readonly type = ModuleActionTypes.LoadModulesSuccess;
  constructor(public payload: any) {}
}

export class LoadModulesFail implements Action {
  readonly type = ModuleActionTypes.LoadModulesFail;
  constructor(public payload: any) {}
}

export class ResetModules implements Action {
  readonly type = ModuleActionTypes.ResetModules;
}

export class CreateModule implements Action {
  readonly type = ModuleActionTypes.CreateModule;
  constructor(public payload: any) {}
}

export class CreateModuleSuccess implements Action {
  readonly type = ModuleActionTypes.CreateModuleSuccess;
  constructor(public payload: any) {}
}

export class CreateModuleFail implements Action {
  readonly type = ModuleActionTypes.CreateModuleFail;
  constructor(public payload: any) {}
}

export class UpdateModule implements Action {
  readonly type = ModuleActionTypes.UpdateModule;
  constructor(public payload: any) {}
}

export class UpdateModuleSuccess implements Action {
  readonly type = ModuleActionTypes.UpdateModuleSuccess;
  constructor(public payload: any) {}
}

export class UpdateModuleFail implements Action {
  readonly type = ModuleActionTypes.UpdateModuleFail;
  constructor(public payload: any) {}
}

export class LoadModuleGroups implements Action {
  readonly type = ModuleActionTypes.LoadModuleGroups;
  constructor(public payload: any) {}
}

export class LoadModuleGroupsSuccess implements Action {
  readonly type = ModuleActionTypes.LoadModuleGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadModuleGroupsFail implements Action {
  readonly type = ModuleActionTypes.LoadModuleGroupsFail;
  constructor(public payload: any) {}
}

export class CreateModuleGroup implements Action {
  readonly type = ModuleActionTypes.CreateModuleGroup;
  constructor(public payload: any) {}
}

export class CreateModuleGroupSuccess implements Action {
  readonly type = ModuleActionTypes.CreateModuleGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateModuleGroupFail implements Action {
  readonly type = ModuleActionTypes.CreateModuleGroupFail;
  constructor(public payload: any) {}
}

export class DeleteModuleGroup implements Action {
  readonly type = ModuleActionTypes.DeleteModuleGroup;
  constructor(public payload: any) {}
}

export class DeleteModuleGroupSuccess implements Action {
  readonly type = ModuleActionTypes.DeleteModuleGroupSuccess;
  constructor(public payload: any) {}
}

export class DeleteModuleGroupFail implements Action {
  readonly type = ModuleActionTypes.DeleteModuleGroupFail;
  constructor(public payload: any) {}
}

export class ResetCRUDModule implements Action {
  readonly type = ModuleActionTypes.ResetCRUDModule;
}

export type ModuleActions = LoadModules | LoadModulesSuccess | LoadModulesFail | ResetModules | LoadModuleGroups | LoadModuleGroupsSuccess | LoadModuleGroupsFail |
  CreateModule | CreateModuleSuccess | CreateModuleFail | ResetCRUDModule | UpdateModule | UpdateModuleSuccess | UpdateModuleFail
  | CreateModuleGroup | CreateModuleGroupSuccess | CreateModuleGroupFail | DeleteModuleGroup | DeleteModuleGroupSuccess | DeleteModuleGroupFail;
