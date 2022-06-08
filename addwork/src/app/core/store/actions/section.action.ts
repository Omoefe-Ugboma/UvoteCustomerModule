import { Action } from '@ngrx/store';

export enum SectionActionTypes {
  LoadSections = '[Sections] Load Sections',
  LoadSectionsSuccess = '[Sections] Load Sections Success',
  LoadSectionsFail = '[Sections] Load Sections Fail',

  CreateSection = '[Sections] Create Section',
  CreateSectionSuccess = '[Sections] Create Section Success',
  CreateSectionFail = '[Sections] Create Section Fail',

  UpdateSection = '[Sections] Update Section',
  UpdateSectionSuccess = '[Sections] Update Section Success',
  UpdateSectionFail = '[Sections] Update Section Fail',

  DeleteSection = '[Sections] Delete Section',
  DeleteSectionSuccess = '[Sections] Delete Section Success',
  DeleteSectionFail = '[Sections] Delete Section Fail',

  LoadSectionGroups = '[SectionGroup] Load SectionGroup',
  LoadSectionGroupsSuccess = '[SectionGroup] Load SectionGroup Success',
  LoadSectionGroupsFail = '[SectionGroup] Load SectionGroup Fail',

  CreateSectionGroup = '[SectionGroup] Create SectionGroup',
  CreateSectionGroupSuccess = '[SectionGroup] Create SectionGroup Success',
  CreateSectionGroupFail = '[SectionGroup] Create SectionGroup Fail',

  DeleteSectionGroup = '[SectionGroup] Delete SectionGroup',
  DeleteSectionGroupSuccess = '[SectionGroup] Delete SectionGroup Success',
  DeleteSectionGroupFail = '[SectionGroup] Delete SectionGroup Fail',

  ResetSections = '[Sections] Reset Section',
  ResetCRUDSection = '[Sections] Reset Created Section',
}

export class LoadSections implements Action {
  readonly type = SectionActionTypes.LoadSections;
}

export class LoadSectionsSuccess implements Action {
  readonly type = SectionActionTypes.LoadSectionsSuccess;
  constructor(public payload: any) {}
}

export class LoadSectionsFail implements Action {
  readonly type = SectionActionTypes.LoadSectionsFail;
  constructor(public payload: any) {}
}

export class ResetSections implements Action {
  readonly type = SectionActionTypes.ResetSections;
}

export class CreateSection implements Action {
  readonly type = SectionActionTypes.CreateSection;
  constructor(public payload: any) {}
}

export class CreateSectionSuccess implements Action {
  readonly type = SectionActionTypes.CreateSectionSuccess;
  constructor(public payload: any) {}
}

export class CreateSectionFail implements Action {
  readonly type = SectionActionTypes.CreateSectionFail;
  constructor(public payload: any) {}
}

export class UpdateSection implements Action {
  readonly type = SectionActionTypes.UpdateSection;
  constructor(public payload: any) {}
}

export class UpdateSectionSuccess implements Action {
  readonly type = SectionActionTypes.UpdateSectionSuccess;
  constructor(public payload: any) {}
}

export class UpdateSectionFail implements Action {
  readonly type = SectionActionTypes.UpdateSectionFail;
  constructor(public payload: any) {}
}

export class DeleteSection implements Action {
  readonly type = SectionActionTypes.DeleteSection;
  constructor(public payload: any) {}
}

export class DeleteSectionSuccess implements Action {
  readonly type = SectionActionTypes.DeleteSectionSuccess;
  constructor(public payload: any) {}
}

export class DeleteSectionFail implements Action {
  readonly type = SectionActionTypes.DeleteSectionFail;
  constructor(public payload: any) {}
}

export class LoadSectionGroups implements Action {
  readonly type = SectionActionTypes.LoadSectionGroups;
  constructor(public payload: any) {}
}

export class LoadSectionGroupsSuccess implements Action {
  readonly type = SectionActionTypes.LoadSectionGroupsSuccess;
  constructor(public payload: any) {}
}

export class LoadSectionGroupsFail implements Action {
  readonly type = SectionActionTypes.LoadSectionGroupsFail;
  constructor(public payload: any) {}
}

export class CreateSectionGroup implements Action {
  readonly type = SectionActionTypes.CreateSectionGroup;
  constructor(public payload: any) {}
}

export class CreateSectionGroupSuccess implements Action {
  readonly type = SectionActionTypes.CreateSectionGroupSuccess;
  constructor(public payload: any) {}
}

export class CreateSectionGroupFail implements Action {
  readonly type = SectionActionTypes.CreateSectionGroupFail;
  constructor(public payload: any) {}
}

export class DeleteSectionGroup implements Action {
  readonly type = SectionActionTypes.DeleteSectionGroup;
  constructor(public payload: any) {}
}

export class DeleteSectionGroupSuccess implements Action {
  readonly type = SectionActionTypes.DeleteSectionGroupSuccess;
  constructor(public payload: any) {}
}

export class DeleteSectionGroupFail implements Action {
  readonly type = SectionActionTypes.DeleteSectionGroupFail;
  constructor(public payload: any) {}
}

export class ResetCRUDSection implements Action {
  readonly type = SectionActionTypes.ResetCRUDSection;
}

export type SectionActions = LoadSections | LoadSectionsSuccess | LoadSectionsFail | ResetSections | LoadSectionGroups | LoadSectionGroupsSuccess | LoadSectionGroupsFail |
  CreateSection | CreateSectionSuccess | CreateSectionFail | DeleteSection | DeleteSectionSuccess | DeleteSectionFail | ResetCRUDSection |
  UpdateSection | UpdateSectionSuccess | UpdateSectionFail | CreateSectionGroup | CreateSectionGroupSuccess | CreateSectionGroupFail | DeleteSectionGroup | DeleteSectionGroupSuccess | DeleteSectionGroupFail;
