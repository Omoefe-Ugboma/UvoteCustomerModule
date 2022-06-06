import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getCustomerState = (state: AppState) => state.customer;

export const getCustomersLoading = createSelector(getCustomerState, state => state.customers_loading);

// export const getCustomersNotLoading = createSelector(getCustomerState, state => state.customers_loading);


export const getCustomerError = createSelector(getCustomerState, state => state.error);

export const getAccountOfficersLoading = createSelector(getCustomerState, state => state.accountofficers_loading);

export const getAccountOfficers = createSelector(getCustomerState, state => state.accountofficers);

export const getCustomers = createSelector(getCustomerState, state => state.customers);

export const getCustomerNotByCustomerID = (CustomerID: string) => createSelector(getCustomers, customers => {
  if (customers) return customers.find((customer: { CustomerID: any; }) => customer.CustomerID == CustomerID);
  return [];
});

export const updateCustomer = createSelector(getCustomerState, state => state.customers_update);

export const updateCustomerLoading = createSelector(getCustomerState, state => state.customers_update_loading);


export const createCustomer = createSelector(getCustomerState, state => state.customers_create);

export const createCustomerLoading = createSelector(getCustomerState, state => state.customers_create_loading);

