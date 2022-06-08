import { MenuActions, MenuActionTypes } from '../actions/menu.action';

/**
 * Interface for the 'Menu' data used in
 * - MenuState, and
 * - MenuReducer
 */
export interface MenuData {
  error: any;
  menus: any;
  menus_loading: boolean;
  menus_create: any;
  menus_create_loading: boolean;
  menus_delete: any;
  menus_delete_loading: boolean;
  menus_update: any;
  menus_update_loading: boolean;
  menu_groups: any;
  menu_groups_loading: boolean;
  menu_group_create: any;
  menu_group_create_loading: boolean;
  menu_group_delete: any;
  menu_group_delete_loading: boolean;
}

export interface MenuState {
  readonly Menu: MenuData;
}

export const initialMenuState: MenuData = {
  error: null,
  menus: null,
  menus_loading: false,
  menus_create: null,
  menus_create_loading: false,
  menus_delete: null,
  menus_delete_loading: false,
  menus_update: null,
  menus_update_loading: false,
  menu_groups: null,
  menu_groups_loading: false,
  menu_group_create: null,
  menu_group_create_loading: false,
  menu_group_delete: null,
  menu_group_delete_loading: false
};

export const menuReducer = (state = initialMenuState, action: MenuActions): MenuData => {
  switch (action.type) {
    case MenuActionTypes.LoadMenus:
      return { ...state, menus_loading: true };

    case MenuActionTypes.LoadMenusSuccess: {
      return { ...state, menus_loading: false, menus: action.payload };
    }

    case MenuActionTypes.LoadMenusFail: {
      return { ...state, menus_loading: false, error: action.payload };
    }

    case MenuActionTypes.ResetMenus: {
      return initialMenuState;
    }

    case MenuActionTypes.CreateMenu:
      return { ...state, menus_create_loading: true };

    case MenuActionTypes.CreateMenuSuccess: {
      return { ...state, menus_create_loading: false, menus_create: action.payload };
    }

    case MenuActionTypes.CreateMenuFail: {
      return { ...state, menus_create_loading: false, menus_create: null, error: action.payload };
    }

    case MenuActionTypes.UpdateMenu:
      return { ...state, menus_update_loading: true };

    case MenuActionTypes.UpdateMenuSuccess: {
      return { ...state, menus_update_loading: false, menus_update: action.payload };
    }

    case MenuActionTypes.UpdateMenuFail: {
      return { ...state, menus_update_loading: false, menus_update: null, error: action.payload };
    }

    case MenuActionTypes.DeleteMenu:
      return { ...state, menus_delete_loading: true };

    case MenuActionTypes.DeleteMenuSuccess: {
      return { ...state, menus_delete_loading: false, menus_delete: action.payload };
    }

    case MenuActionTypes.DeleteMenuFail: {
      return { ...state, menus_delete_loading: false, menus_delete: null, error: action.payload };
    }

    case MenuActionTypes.LoadMenuGroups:
      return { ...state, menu_groups_loading: true };

    case MenuActionTypes.LoadMenuGroupsSuccess: {
      return { ...state, menu_groups_loading: false, menu_groups: action.payload };
    }

    case MenuActionTypes.LoadMenuGroupsFail: {
      return { ...state, menu_groups_loading: false, menu_groups: null, error: action.payload };
    }

    case MenuActionTypes.CreateMenuGroup:
      return { ...state, menu_group_create_loading: true };

    case MenuActionTypes.CreateMenuGroupSuccess: {
      return { ...state, menu_group_create_loading: false, menu_group_create: action.payload };
    }

    case MenuActionTypes.CreateMenuGroupFail: {
      return { ...state, menu_group_create_loading: false, menu_group_create: null, error: action.payload };
    }

    case MenuActionTypes.DeleteMenuGroup:
      return { ...state, menu_group_delete_loading: true };

    case MenuActionTypes.DeleteMenuGroupSuccess: {
      return { ...state, menu_group_delete_loading: false, menu_group_delete: action.payload };
    }

    case MenuActionTypes.DeleteMenuGroupFail: {
      return { ...state, menu_group_delete_loading: false, menu_group_delete: null, error: action.payload };
    }

    case MenuActionTypes.ResetCRUDMenu: {
      return {
        ...state,
        menus_create: null,
        menus_delete: null,
        menus_update: null,
        menu_group_create: null,
        menu_group_delete: null,
        error: null
      };
    }

    default:
      return state;
  }
};
