import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { MenuService } from 'src/app/core/service/menu.service';
import { MenuActionTypes } from '../actions/menu.action';
import * as menuActions from '../actions/menu.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class MenuEffects {
  // constructor(
  //   private router: Router,
  //   private actions$: Actions,
  //   private menuService: MenuService) { }

  // menus$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.LoadMenus),
  //   mergeMap(() => this.menuService.getMenus()
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new menuActions.LoadMenusSuccess(data.data.data);
  //         }
  //         return new menuActions.LoadMenusFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.LoadMenusFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createmenu$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.CreateMenu),
  //   mergeMap((action: menuActions.CreateMenu) => this.menuService.createMenu(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new menuActions.CreateMenuSuccess(data);
  //         }
  //         return new menuActions.CreateMenuFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.CreateMenuFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deletemenu$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.DeleteMenu),
  //   mergeMap((action: menuActions.DeleteMenu) => this.menuService.deleteMenus(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new menuActions.DeleteMenuSuccess(data);
  //         }
  //         return new menuActions.DeleteMenuFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.DeleteMenuFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // updatemenu$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.UpdateMenu),
  //   mergeMap((action: menuActions.UpdateMenu) => this.menuService.updateMenu(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new menuActions.UpdateMenuSuccess(data);
  //         }
  //         return new menuActions.UpdateMenuFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.UpdateMenuFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // menugroups$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.LoadMenuGroups),
  //   mergeMap((action: menuActions.LoadMenuGroups) => this.menuService.getMenuGroups(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new menuActions.LoadMenuGroupsSuccess(data.data.data);
  //         }
  //         return new menuActions.LoadMenuGroupsFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.LoadMenuGroupsFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createmenugroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.CreateMenuGroup),
  //   mergeMap((action: menuActions.CreateMenuGroup) => this.menuService.createMenuGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new menuActions.CreateMenuGroupSuccess(data);
  //         }
  //         return new menuActions.CreateMenuGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.CreateMenuGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deletemenugroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(MenuActionTypes.DeleteMenuGroup),
  //   mergeMap((action: menuActions.DeleteMenuGroup) => this.menuService.deleteMenuGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new menuActions.DeleteMenuGroupSuccess(data);
  //         }
  //         return new menuActions.DeleteMenuGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new menuActions.DeleteMenuGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));
}
