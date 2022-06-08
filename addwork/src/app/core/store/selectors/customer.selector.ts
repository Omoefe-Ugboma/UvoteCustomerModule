import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getCustomerState = (state: AppState) => state.customer;

export const getCustomersLoading = createSelector(getCustomerState, state => state.customers_loading);

export const getCustomerError = createSelector(getCustomerState, state => state.error);

export const getCustomers = createSelector(getCustomerState, state => state.customers);

export const getCustomerByCustomerID = (CustomerID: string) => createSelector(getCustomers, customers => {
  if (customers) return customers.find((customer: { CustomerID: any; }) => customer.CustomerID == CustomerID);
  return [];
});

// export const getCustomerByUUID = (CUID: string) => createSelector(getCustomers, customers => {
//   if (customers) return customers.find((customer: { CUID: any; }) => customer.CUID == CUID);

//   return [];
// });

export const createCustomer = createSelector(getCustomerState, state => state.customers_create);

export const createCustomerLoading = createSelector(getCustomerState, state => state.customers_create_loading);

export const deleteCustomer = createSelector(getCustomerState, state => state.customers_delete);

export const deleteCustomerLoading = createSelector(getCustomerState, state => state.customers_delete_loading);

export const updateCustomer = createSelector(getCustomerState, state => state.customers_update);

export const updateCustomerLoading = createSelector(getCustomerState, state => state.customers_update_loading);

export const updateCreateCustomer = createSelector(getCustomerState, state => state.customers_create_update);

export const updateCreateCustomerLoading = createSelector(getCustomerState, state => state.customers_create_update_loading);


export const getCustomerGroups = createSelector(getCustomerState, state => state.customer_groups);

export const getCustomerGroupsLoading = createSelector(getCustomerState, state => state.customer_groups_loading);

export const createCustomerGroup = createSelector(getCustomerState, state => state.customer_group_create);

export const createCustomerGroupLoading = createSelector(getCustomerState, state => state.customer_group_create_loading);

export const deleteCustomerGroup = createSelector(getCustomerState, state => state.customer_group_delete);

export const deleteCustomerGroupLoading = createSelector(getCustomerState, state => state.customer_group_delete_loading);

export const getCustomersDetailLoading = createSelector(getCustomerState, state => state.customers_detail_loading);

export const getCustomersDetail = createSelector(getCustomerState, state => state.customers_detail);


export const getCustomerLoading = createSelector(getCustomerState, state => state.customer_loading);

export const getCustomer = createSelector(getCustomerState, state => state.customer);