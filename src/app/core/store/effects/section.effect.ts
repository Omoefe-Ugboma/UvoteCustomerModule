import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

import { SectionService } from 'src/app/core/service/section.service';
import { SectionActionTypes } from '../actions/section.action';
import * as sectionActions from '../actions/section.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SectionEffects {
  // constructor(
  //   private router: Router,
  //   private actions$: Actions,
  //   private sectionService: SectionService) { }

  // sections$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.LoadSections),
  //   mergeMap(() => this.sectionService.getSections()
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new sectionActions.LoadSectionsSuccess(data.data.data);
  //         }
  //         return new sectionActions.LoadSectionsFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.LoadSectionsFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createsection$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.CreateSection),
  //   mergeMap((action: sectionActions.CreateSection) => this.sectionService.createSection(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new sectionActions.CreateSectionSuccess(data);
  //         }
  //         return new sectionActions.CreateSectionFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.CreateSectionFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deletesection$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.DeleteSection),
  //   mergeMap((action: sectionActions.DeleteSection) => this.sectionService.deleteSections(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new sectionActions.DeleteSectionSuccess(data);
  //         }
  //         return new sectionActions.DeleteSectionFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.DeleteSectionFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // updatesection$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.UpdateSection),
  //   mergeMap((action: sectionActions.UpdateSection) => this.sectionService.updateSection(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new sectionActions.UpdateSectionSuccess(data);
  //         }
  //         return new sectionActions.UpdateSectionFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.UpdateSectionFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // sectiongroups$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.LoadSectionGroups),
  //   mergeMap((action: sectionActions.LoadSectionGroups) => this.sectionService.getSectionGroups(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true) {
  //           return new sectionActions.LoadSectionGroupsSuccess(data.data.data);
  //         }
  //         return new sectionActions.LoadSectionGroupsFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.LoadSectionGroupsFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // createsectiongroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.CreateSectionGroup),
  //   mergeMap((action: sectionActions.CreateSectionGroup) => this.sectionService.createSectionGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new sectionActions.CreateSectionGroupSuccess(data);
  //         }
  //         return new sectionActions.CreateSectionGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.CreateSectionGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));

  // deletesectiongroup$ = createEffect(() =>  this.actions$.pipe(
  //   ofType(SectionActionTypes.DeleteSectionGroup),
  //   mergeMap((action: sectionActions.DeleteSectionGroup) => this.sectionService.deleteSectionGroup(action.payload)
  //     .pipe(
  //       map((data) => {
  //         if (data.status === true)  {
  //           return new sectionActions.DeleteSectionGroupSuccess(data);
  //         }
  //         return new sectionActions.DeleteSectionGroupFail(getErrorObj(data));
  //       }),
  //       catchError(error => of(new sectionActions.DeleteSectionGroupFail(getErrorObj(error))))
  //     )
  //   )
  // ));
}
