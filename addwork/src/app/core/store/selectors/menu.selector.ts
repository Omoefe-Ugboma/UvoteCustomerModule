import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getMenuState = (state: AppState) => state.menu;

export const getMenusLoading = createSelector(getMenuState, state => state.menus_loading);

export const getMenuError = createSelector(getMenuState, state => state.error);

export const getMenus = createSelector(getMenuState, state => state.menus);

export const getMenuByMenuID = (MenuID: string) => createSelector(getMenus, menus => {
  if (menus) return menus.find((menu: { MenuID: any; }) => menu.MenuID == MenuID);
  return [];
});

export const createMenu = createSelector(getMenuState, state => state.menus_create);

export const createMenuLoading = createSelector(getMenuState, state => state.menus_create_loading);

export const deleteMenu = createSelector(getMenuState, state => state.menus_delete);

export const deleteMenuLoading = createSelector(getMenuState, state => state.menus_delete_loading);

export const updateMenu = createSelector(getMenuState, state => state.menus_update);

export const updateMenuLoading = createSelector(getMenuState, state => state.menus_update_loading);

export const getMenuGroups = createSelector(getMenuState, state => state.menu_groups);

export const getMenuGroupsLoading = createSelector(getMenuState, state => state.menu_groups_loading);

export const createMenuGroup = createSelector(getMenuState, state => state.menu_group_create);

export const createMenuGroupLoading = createSelector(getMenuState, state => state.menu_group_create_loading);

export const deleteMenuGroup = createSelector(getMenuState, state => state.menu_group_delete);

export const deleteMenuGroupLoading = createSelector(getMenuState, state => state.menu_group_delete_loading);

