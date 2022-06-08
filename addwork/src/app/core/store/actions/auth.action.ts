import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth Page] Login',
  LoginSuccess = '[Auth API] Login Success',
  LoginFail = '[Auth API] Login Fail',

  Logout = '[Auth Page] Logout',
  LogoutSuccess = '[Auth API] Logout Success',
  LogoutFail = '[Auth API] Logout Fail',

  ResetAuth = '[Auth] Reset',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: any) {}
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

export type AuthActions = Login | LoginSuccess | LoginFail | ResetAuth | Logout | LogoutSuccess | LogoutFail;
