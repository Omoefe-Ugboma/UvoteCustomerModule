import { Action } from '@ngrx/store';
import { LoginReq } from '../../schema/login.schema';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail',

  Logout = '[Auth Page] Logout',
  LogoutSuccess = '[Auth API] Logout Success',
  LogoutFail = '[Auth API] Logout Fail',

  ResetAuth = '[Auth] Reset',

  ClearAuthError = '[Auth] Clear Error',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: LoginReq) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;
  constructor(public payload: any) {}
}

export class LogoutFail implements Action {
  readonly type = AuthActionTypes.LogoutFail;
  constructor(public payload: any) {}
}

export class ResetAuth implements Action {
  readonly type = AuthActionTypes.ResetAuth;
}

export class ClearAuthError implements Action {
  readonly type = AuthActionTypes.ClearAuthError;
}

export type AuthActions = Login | LoginSuccess | LoginFail | ResetAuth | Logout | LogoutSuccess | LogoutFail | ClearAuthError;
