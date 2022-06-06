import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getCustomerdraftnotState = (state: AppState) => state.customerdraft;

export const getCustomersdraftnotLoading = createSelector(getCustomerdraftnotState, state => state.customerdratnot_loading);

export const getCustomerdraftnotError = createSelector(getCustomerdraftnotState, state => state.error);
export const getCustomersdraftnot = createSelector(getCustomerdraftnotState, state => state.customerdraftnot);

export const getCustomerNotByCustomerID = (CustomerID: string) => createSelector(getCustomersdraftnot, customers => {
  if (customers) return customers.find((customer: { CustomerID: any; }) => customer.CustomerID == CustomerID);
  return [];
});



 