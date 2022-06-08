import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getAccountOfficerState = (state: AppState) => state.account_officer;

export const getAccountOfficersLoading = createSelector(getAccountOfficerState, state => state.account_officers_loading);

export const getAccountOfficerError = createSelector(getAccountOfficerState, state => state.error);

export const getAccountOfficers = createSelector(getAccountOfficerState, state => state.account_officers);

// export const getCustomerByUUID = (CUID: string) => createSelector(getCustomers, customers => {
//   if (customers) return customers.find((customer: { CUID: any; }) => customers.CUID == CUID);
//   return [];
// });

// export const createCustomer= createSelector(getCustomerState, state => state.customers_create);

// export const createCustomerLoading = createSelector(getCustomerState, state => state.customers_create_loading);

// export const updateCustomer = createSelector(getCustomerState, state => state.customers_update);

// export const updateCustomerLoading = createSelector(getCustomerState, state => state.customers_update_loading);

// export const getCustomerGroups = createSelector(getCustomerState, state => state.customer_groups);

// export const getCustomerGroupsLoading = createSelector(getCustomerState, state => state.customer_groups_loading);

// export const createCustomerGroup = createSelector(getCustomerState, state => state.customer_group_create);

// export const createCustomerGroupLoading = createSelector(getCustomerState, state => state.customer_group_create_loading);

// export const deleteCustomerGroup = createSelector(getCustomerState, state => state.customer_group_delete);

// export const deleteCustomerGroupLoading = createSelector(getCustomerState, state => state.customer_group_delete_loading);

