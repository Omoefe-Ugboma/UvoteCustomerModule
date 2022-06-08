import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getAddressState = (state: AppState) => state.address;

export const getCustomerAddressLoading = createSelector(getAddressState, state => state.address_loading);

export const getCustomerAddressError = createSelector(getAddressState, state => state.error);

export const getCustomerAddress = createSelector(getAddressState, state => state.address);

export const getAddressByCustomerID = (AddressID: string) => createSelector(getCustomerAddress, address => {
  if (address) return address.find((address: { AddressID: any; }) => address.AddressID == AddressID);
  return [];
});

export const createCustomerAddress = createSelector(getAddressState, state => state.address_create);

export const createCustomerAddressLoading = createSelector(getAddressState, state => state.address_create_loading);

export const deleteCustomerAddress = createSelector(getAddressState, state => state.address_delete);

export const deleteCustomerAddressLoading = createSelector(getAddressState, state => state.address_delete_loading);

export const updateCustomerAddress = createSelector(getAddressState, state => state.address_update);

export const updateCustomerAddressLoading = createSelector(getAddressState, state => state.address_update_loading);

 