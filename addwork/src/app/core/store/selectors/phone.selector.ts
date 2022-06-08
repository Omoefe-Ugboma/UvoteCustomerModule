import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getPhoneState = (state: AppState) => state.phone;

export const getCustomerPhoneLoading = createSelector(getPhoneState, state => state.phone_loading);

export const getCustomerPhoneError = createSelector(getPhoneState, state => state.error);

export const getCustomerPhone = createSelector(getPhoneState, state => state.phone);

export const getPhoneByCustomerID = (PhoneID: string) => createSelector(getCustomerPhone, phone => {
  if (phone) return phone.find((phone: {PhoneID: any; }) => phone.PhoneID == PhoneID);
  return [];
});

export const createCustomerPhone = createSelector(getPhoneState, state => state.phone_create);

export const createCustomerPhoneLoading = createSelector(getPhoneState, state => state.phone_create_loading);

export const deleteCustomerPhone = createSelector(getPhoneState, state => state.phone_delete);

export const deleteCustomerPhoneLoading = createSelector(getPhoneState, state => state.phone_delete_loading);

export const updateCustomerPhone = createSelector(getPhoneState, state => state.phone_update);

export const updateCustomerPhoneLoading = createSelector(getPhoneState, state => state.phone_update_loading);

 