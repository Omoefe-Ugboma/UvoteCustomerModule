import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { ModuleService } from 'src/app/core/service/module.service';
import { ModuleActionTypes } from '../actions/module.action';
import * as moduleActions from '../actions/module.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class ModuleEffects {
  // constructor(
  //   private router: Router,
  //   private actions$: Actions,
  //   private moduleService: ModuleService) { }

  // modules$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.LoadModules),
  //   mergeMap(() => this.moduleService.getModules()
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new moduleActions.LoadModulesSuccess(data.data.data);
  //         }
  //         return new moduleActions.LoadModulesFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new moduleActions.LoadModulesFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createmodule$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.CreateModule),
  //   mergeMap((action: moduleActions.CreateModule) => this.moduleService.createModule(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new moduleActions.CreateModuleSuccess(data);
  //         }
  //         return new moduleActions.CreateModuleFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new moduleActions.CreateModuleFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // updatemodule$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.UpdateModule),
  //   mergeMap((action: moduleActions.UpdateModule) => this.moduleService.updateModule(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new moduleActions.UpdateModuleSuccess(data);
  //         }
  //         return new moduleActions.UpdateModuleFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new moduleActions.UpdateModuleFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // modulegroups$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.LoadModuleGroups),
  //   mergeMap((action: moduleActions.LoadModuleGroups) => this.moduleService.getModuleGroups(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new moduleActions.LoadModuleGroupsSuccess(data.data);
  //         }
  //         return new moduleActions.LoadModuleGroupsFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new moduleActions.LoadModuleGroupsFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createmodulegroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.CreateModuleGroup),
  //   mergeMap((action: moduleActions.CreateModuleGroup) => this.moduleService.createModuleGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new moduleActions.CreateModuleGroupSuccess(data);
  //         }
  //         return new moduleActions.CreateModuleGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new moduleActions.CreateModuleGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deletemodulegroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(ModuleActionTypes.DeleteModuleGroup),
  //   mergeMap((action: moduleActions.DeleteModuleGroup) => this.moduleService.deleteModuleGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new moduleActions.DeleteModuleGroupSuccess(data);
  //         }
  //         return new moduleActions.DeleteModuleGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new moduleActions.DeleteModuleGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));
}
