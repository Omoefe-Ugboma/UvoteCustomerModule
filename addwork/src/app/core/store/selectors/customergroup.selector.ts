import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getCustomerGroupState = (state: AppState) => state.customer_group;

export const getCustomerMGroupsLoading = createSelector(getCustomerGroupState, state => state.customer_groups_loading);

export const getCustomerMGroupError = createSelector(getCustomerGroupState, state => state.error);

export const getCustomerMGroups = createSelector(getCustomerGroupState, state => state.customer_groups);

export const getCustomerGroupByID = (ID: any) => createSelector(getCustomerMGroups, customer_groups => {
  if (customer_groups) return customer_groups.find((customer_group: { ID: any; }) => customer_group.ID == ID);
  return [];
});

export const createCustomerMGroup = createSelector(getCustomerGroupState, state => state.customer_groups_create);

export const createCustomerMGroupLoading = createSelector(getCustomerGroupState, state => state.customer_groups_create_loading);

export const updateCustomerMGroup = createSelector(getCustomerGroupState, state => state.customer_groups_update);

export const updateCustomerMGroupLoading = createSelector(getCustomerGroupState, state => state.customer_groups_update_loading);
