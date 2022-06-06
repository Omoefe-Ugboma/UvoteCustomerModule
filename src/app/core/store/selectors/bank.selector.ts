import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const getBankState = (state: AppState) => state.bank;

export const getBankError = createSelector(getBankState, state => state.error);

export const getCustomerBanksLoading = createSelector(getBankState, state => state.customer_banks_loading);

export const getCustomerBanks = createSelector(getBankState, state => state.customer_banks);

export const getCustomerBankDetailsLoading = createSelector(getBankState, state => state.customerbank_detail_loading);

export const getCustomerBankDetails = createSelector(getBankState, state => state.customerbank_detail);
