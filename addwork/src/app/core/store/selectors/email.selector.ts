import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getEmailState = (state: AppState) => state.email;

export const getCustomerEmailLoading = createSelector(getEmailState, state => state.email_loading);

export const getCustomerEmailError = createSelector(getEmailState, state => state.error);

export const getCustomerEmail = createSelector(getEmailState, state => state.email);

export const getEmailByCustomerID = (EmailID: string) => createSelector(getCustomerEmail, email => {
  if (email) return email.find((email: { EmailID: any; }) => email.EmailID == EmailID);
  return [];
});

export const createCustomerEmail = createSelector(getEmailState, state => state.email_create);

export const createCustomerEmailLoading = createSelector(getEmailState, state => state.email_create_loading);

export const deleteCustomerEmail = createSelector(getEmailState, state => state.email_delete);

export const deleteCustomerEmailLoading = createSelector(getEmailState, state => state.email_delete_loading);

export const updateCustomerEmail = createSelector(getEmailState, state => state.email_update);

export const updateCustomerEmailLoading = createSelector(getEmailState, state => state.email_update_loading);

 