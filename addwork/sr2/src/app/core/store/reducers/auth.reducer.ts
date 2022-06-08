import { AuthActions, AuthActionTypes } from './../actions/auth.action';

/**
 * Interface for the 'Auth' data used in
 * - AuthState, and
 * - authReducer
 */
export interface AuthData {
  user: any;
  loading: boolean;
  error: any;
  logout: any;
}

export interface AuthState {
  readonly auth: AuthData;
}

export const initialAuthState: AuthData = {
  error: null,
  user: null,
  loading: false,
  logout: null
};

export const authReducer = (state = initialAuthState, action: AuthActions): AuthData => {
  switch (action.type) {
    case AuthActionTypes.Login:
      return { ...state, loading: true };

    case AuthActionTypes.LoginSuccess: {
      return { ...state, loading: false, user: action.payload };
    }

    case AuthActionTypes.Logout:
      return { ...state, loading: true };

    case AuthActionTypes.LogoutSuccess: {
      return initialAuthState;
    }

    case AuthActionTypes.LogoutFail: {
      return initialAuthState;
    }

    case AuthActionTypes.LoginFail: {
      return { ...state, loading: false, user: null, error: action.payload };
    }

    case AuthActionTypes.ResetAuth: {
      return initialAuthState;
    }

    default:
      return state;
  }
};
