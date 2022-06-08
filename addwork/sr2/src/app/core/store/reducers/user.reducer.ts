import { UserActions, UserActionTypes } from '../actions/user.action';

/**
 * Interface for the 'User' data used in
 * - UserState, and
 * - UserReducer
 */
export interface UserData {
  error: any;
  users: any;
  users_loading: boolean;
  users_create: any;
  users_create_loading: boolean;
  users_disable: any;
  users_disable_loading: boolean;
  users_update: any;
  users_update_loading: boolean;
  users_enable: any;
  users_enable_loading: boolean;
  user_password_reset: any;
  user_password_reset_loading: boolean;
  user_groups: any;
  user_groups_loading: boolean;
  user_group_create: any;
  user_group_create_loading: boolean;
  user_group_delete: any;
  user_group_delete_loading: boolean;
}

export interface UserState {
  readonly User: UserData;
}

export const initialUserState: UserData = {
  error: null,
  users: null,
  users_loading: false,
  users_create: null,
  users_create_loading: false,
  users_disable: null,
  users_disable_loading: false,
  users_update: null,
  users_update_loading: false,
  users_enable: null,
  users_enable_loading: false,
  user_password_reset: null,
  user_password_reset_loading: false,
  user_groups: null,
  user_groups_loading: false,
  user_group_create: null,
  user_group_create_loading: false,
  user_group_delete: null,
  user_group_delete_loading: false
};

export const userReducer = (state = initialUserState, action: UserActions): UserData => {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return { ...state, users_loading: true };

    case UserActionTypes.LoadUsersSuccess: {
      return { ...state, users_loading: false, users: action.payload };
    }

    case UserActionTypes.LoadUsersFail: {
      return { ...state, users_loading: false, error: action.payload };
    }

    case UserActionTypes.ResetUsers: {
      return initialUserState;
    }

    case UserActionTypes.CreateUser:
      return { ...state, users_create_loading: true };

    case UserActionTypes.CreateUserSuccess: {
      return { ...state, users_create_loading: false, users_create: action.payload };
    }

    case UserActionTypes.CreateUserFail: {
      return { ...state, users_create_loading: false, users_create: null, error: action.payload };
    }

    case UserActionTypes.UpdateUser:
      return { ...state, users_update_loading: true };

    case UserActionTypes.UpdateUserSuccess: {
      return { ...state, users_update_loading: false, users_update: action.payload };
    }

    case UserActionTypes.UpdateUserFail: {
      return { ...state, users_update_loading: false, users_update: null, error: action.payload };
    }

    case UserActionTypes.DisableUser:
      return { ...state, users_disable_loading: true };

    case UserActionTypes.DisableUserSuccess: {
      return { ...state, users_disable_loading: false, users_disable: action.payload };
    }

    case UserActionTypes.DisableUserFail: {
      return { ...state, users_disable_loading: false, users_disable: null, error: action.payload };
    }

    case UserActionTypes.EnableUser:
      return { ...state, users_enable_loading: true };

    case UserActionTypes.EnableUserSuccess: {
      return { ...state, users_enable_loading: false, users_enable: action.payload };
    }

    case UserActionTypes.EnableUserFail: {
      return { ...state, users_enable_loading: false, users_enable: null, error: action.payload };
    }

    case UserActionTypes.ResetUserPassword:
      return { ...state, user_password_reset_loading: true };

    case UserActionTypes.ResetUserPasswordSuccess: {
      return { ...state, user_password_reset_loading: false, user_password_reset: action.payload };
    }

    case UserActionTypes.ResetUserPasswordFail: {
      return { ...state, user_password_reset_loading: false, user_password_reset: null, error: action.payload };
    }

    case UserActionTypes.LoadUserGroups:
      return { ...state, user_groups_loading: true };

    case UserActionTypes.LoadUserGroupsSuccess: {
      return { ...state, user_groups_loading: false, user_groups: action.payload };
    }

    case UserActionTypes.LoadUserGroupsFail: {
      return { ...state, user_groups_loading: false, user_groups: null, error: action.payload };
    }

    case UserActionTypes.CreateUserGroup:
      return { ...state, user_group_create_loading: true };

    case UserActionTypes.CreateUserGroupSuccess: {
      return { ...state, user_group_create_loading: false, user_group_create: action.payload };
    }

    case UserActionTypes.CreateUserGroupFail: {
      return { ...state, user_group_create_loading: false, user_group_create: null, error: action.payload };
    }

    case UserActionTypes.DeleteUserGroup:
      return { ...state, user_group_delete_loading: true };

    case UserActionTypes.DeleteUserGroupSuccess: {
      return { ...state, user_group_delete_loading: false, user_group_delete: action.payload };
    }

    case UserActionTypes.DeleteUserGroupFail: {
      return { ...state, user_group_delete_loading: false, user_group_delete: null, error: action.payload };
    }

    case UserActionTypes.ResetCRUDUser: {
      return {
        ...state,
        users_create: null,
        users_disable: null,
        users_enable: null,
        users_update: null,
        user_password_reset: null,
        user_group_create: null,
        user_group_delete: null,
        error: null
      };
    }

    default:
      return state;
  }
};
