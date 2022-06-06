import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getGroupState = (state: AppState) => state.group;

export const getGroupsLoading = createSelector(getGroupState, state => state.groups_loading);

export const getGroupError = createSelector(getGroupState, state => state.error);

export const getGroups = createSelector(getGroupState, state => state.groups);

export const getGroupByID = (ID: any) => createSelector(getGroups, groups => {
  if (groups) return groups.find((group: { ID: any; }) => group.ID == ID);
  return [];
});

export const createGroup = createSelector(getGroupState, state => state.groups_create);

export const createGroupLoading = createSelector(getGroupState, state => state.groups_create_loading);

export const updateGroup = createSelector(getGroupState, state => state.groups_update);

export const updateGroupLoading = createSelector(getGroupState, state => state.groups_update_loading);
