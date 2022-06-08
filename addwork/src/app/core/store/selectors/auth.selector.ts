import { AppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';

const getAuthState = (state: AppState) => state.auth;

export const getAuthLoading = createSelector(getAuthState, state => state.loading);

export const getAuthError = createSelector(getAuthState, state => state.error);

export const getAuthUser = createSelector(getAuthState, state => state.user);
