import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { GroupService } from 'src/app/core/service/group.service';
import { GroupActionTypes } from '../actions/group.action';
import * as groupActions from '../actions/group.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
// import { getErrorObj } from '../../utils/error-utils';

@Injectable()
export class GroupEffects {
  // constructor(
  //   private router: Router,
  //   private actions$: Actions,
  //   private groupService: GroupService) { }

  // groups$ = createEffect(() =>  {
  //   return this.actions$.pipe(
  //     ofType(GroupActionTypes.LoadGroups),
  //     mergeMap(() => this.groupService.getGroups()
  //       .pipe(
  //         map((data) => {
  //           if (data.status === true) {
  //             return new groupActions.LoadGroupsSuccess(data.data.data);
  //           }
  //           return new groupActions.LoadGroupsFail(getErrorObj(data));
  //         }),
  //         catchError(error => of(new groupActions.LoadGroupsFail(getErrorObj(error))))
  //       )
  //     )
  //   )
  // });

  // creategroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(GroupActionTypes.CreateGroup),
  //   mergeMap((action: groupActions.CreateGroup) => this.groupService.createGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new groupActions.CreateGroupSuccess(data);
  //         }
  //         return new groupActions.CreateGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new groupActions.CreateGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // updategroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(GroupActionTypes.UpdateGroup),
  //   mergeMap((action: groupActions.UpdateGroup) => this.groupService.updateGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new groupActions.UpdateGroupSuccess(data);
  //         }
  //         return new groupActions.UpdateGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new groupActions.UpdateGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));
}
