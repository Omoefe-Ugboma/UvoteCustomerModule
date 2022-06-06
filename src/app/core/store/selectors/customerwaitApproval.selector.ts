import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getCustomerwaitApprovalState = (state: AppState) => state.customerwaitApproval;

export const getCustomerswaitApprovalLoading = createSelector(getCustomerwaitApprovalState, state => state.customerwaitApproval_loading);

export const getCustomerwaitApprovalError = createSelector(getCustomerwaitApprovalState, state => state.error);
export const getCustomerswaitApproval = createSelector(getCustomerwaitApprovalState, state => state.customerwaitApproval);

export const getCustomerNotByCustomerID = (CustomerID: string) => createSelector(getCustomerswaitApproval, customers => {
  if (customers) return customers.find((customer: { CustomerID: any; }) => customer.CustomerID == CustomerID);
  return [];
});



 