import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getModuleState = (state: AppState) => state.module;

export const getModulesLoading = createSelector(getModuleState, state => state.modules_loading);

export const getModuleError = createSelector(getModuleState, state => state.error);

export const getModules = createSelector(getModuleState, state => state.modules);

export const getModuleByUUID = (ModuleID: string) => createSelector(getModules, modules => {
  if (modules) return modules.find((module: { ModuleID: any; }) => module.ModuleID == ModuleID);
  return [];
});

export const createModule = createSelector(getModuleState, state => state.modules_create);

export const createModuleLoading = createSelector(getModuleState, state => state.modules_create_loading);

export const updateModule = createSelector(getModuleState, state => state.modules_update);

export const updateModuleLoading = createSelector(getModuleState, state => state.modules_update_loading);

export const getModuleGroups = createSelector(getModuleState, state => state.module_groups);

export const getModuleGroupsLoading = createSelector(getModuleState, state => state.module_groups_loading);

export const createModuleGroup = createSelector(getModuleState, state => state.module_group_create);

export const createModuleGroupLoading = createSelector(getModuleState, state => state.module_group_create_loading);

export const deleteModuleGroup = createSelector(getModuleState, state => state.module_group_delete);

export const deleteModuleGroupLoading = createSelector(getModuleState, state => state.module_group_delete_loading);

