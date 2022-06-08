import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getUserState = (state: AppState) => state.user;

export const getUsersLoading = createSelector(getUserState, state => state.users_loading);

export const getUserError = createSelector(getUserState, state => state.error);

export const getUsers = createSelector(getUserState, state => state.users);

export const getUserByUUID = (UUID: string) => createSelector(getUsers, users => {
  if (users) return users.find((user: { UUID: any; }) => user.UUID == UUID);
  return [];
});

export const createUser = createSelector(getUserState, state => state.users_create);

export const createUserLoading = createSelector(getUserState, state => state.users_create_loading);

export const disableUser = createSelector(getUserState, state => state.users_disable);

export const disableUserLoading = createSelector(getUserState, state => state.users_disable_loading);

export const enableUser = createSelector(getUserState, state => state.users_enable);

export const enableUserLoading = createSelector(getUserState, state => state.users_enable_loading);

export const updateUser = createSelector(getUserState, state => state.users_update);

export const updateUserLoading = createSelector(getUserState, state => state.users_update_loading);

export const resetUserPassword = createSelector(getUserState, state => state.user_password_reset);

export const resetUserPasswordLoading = createSelector(getUserState, state => state.user_password_reset_loading);

export const getUserGroups = createSelector(getUserState, state => state.user_groups);

export const getUserGroupsLoading = createSelector(getUserState, state => state.user_groups_loading);

export const createUserGroup = createSelector(getUserState, state => state.user_group_create);

export const createUserGroupLoading = createSelector(getUserState, state => state.user_group_create_loading);

export const deleteUserGroup = createSelector(getUserState, state => state.user_group_delete);

export const deleteUserGroupLoading = createSelector(getUserState, state => state.user_group_delete_loading);

