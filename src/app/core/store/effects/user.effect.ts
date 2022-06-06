import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/service/user.service';
import { UserActionTypes } from '../actions/user.action';
import * as userActions from '../actions/user.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserAccessMenu } from './../../schema/menu.schema';
import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class UserEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private userService: UserService) { }

  users$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.LoadUserMenu),
    mergeMap(() => this.userService.getUserAccessMenus()
      .pipe(
        map((data) => {
          if (data.status === true) {
            return new userActions.LoadUserMenuSuccess(data.data);
          }
          return new userActions.LoadUserMenuFail(getErrorObj(data));
        }),
        catchError(error => of(new userActions.LoadUserMenuFail(getErrorObj(error))))
      )
    )
  ));

  // createuser$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.CreateUser),
  //   mergeMap((action: userActions.CreateUser) => this.userService.createUser(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.CreateUserSuccess(data);
  //         }
  //         return new userActions.CreateUserFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.CreateUserFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // disableuser$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.DisableUser),
  //   mergeMap((action: userActions.DisableUser) => this.userService.disableUser(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.DisableUserSuccess(data);
  //         }
  //         return new userActions.DisableUserFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.DisableUserFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // enableuser$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.EnableUser),
  //   mergeMap((action: userActions.EnableUser) => this.userService.enableUser(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.EnableUserSuccess(data);
  //         }
  //         return new userActions.EnableUserFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.EnableUserFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // updateuser$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.UpdateUser),
  //   mergeMap((action: userActions.UpdateUser) => this.userService.updateUser(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.UpdateUserSuccess(data);
  //         }
  //         return new userActions.UpdateUserFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.UpdateUserFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // passwordreset$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.ResetUserPassword),
  //   mergeMap((action: userActions.ResetUserPassword) => this.userService.resetUserPassword(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.ResetUserPasswordSuccess(data);
  //         }
  //         return new userActions.ResetUserPasswordFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.ResetUserPasswordFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // usergroups$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.LoadUserGroups),
  //   mergeMap((action: userActions.LoadUserGroups) => this.userService.getUserGroups(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new userActions.LoadUserGroupsSuccess(data.data[0].groups);
  //         }
  //         return new userActions.LoadUserGroupsFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.LoadUserGroupsFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createusergroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.CreateUserGroup),
  //   mergeMap((action: userActions.CreateUserGroup) => this.userService.createUserGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.CreateUserGroupSuccess(data);
  //         }
  //         return new userActions.CreateUserGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.CreateUserGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deleteusergroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(UserActionTypes.DeleteUserGroup),
  //   mergeMap((action: userActions.DeleteUserGroup) => this.userService.deleteUserGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new userActions.DeleteUserGroupSuccess(data);
  //         }
  //         return new userActions.DeleteUserGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new userActions.DeleteUserGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));
}
