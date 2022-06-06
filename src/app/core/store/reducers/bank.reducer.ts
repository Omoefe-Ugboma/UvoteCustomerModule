import { BankActions, BankActionTypes } from '../actions/bank.action';

/**
 * Interface for the 'Bank' data used in
 * - BankState, and
 * - BankReducer
 */
export interface BankData {
  error: any;
  customer_banks: any;
  customer_banks_loading: boolean;
  customerbank_detail: any;
  customerbank_detail_loading: boolean;
}

export interface BankState {
  readonly Bank: BankData;
}

export const initialBankState: BankData = {
  error: null,
  customer_banks: null,
  customer_banks_loading: false,
  customerbank_detail: null,
  customerbank_detail_loading: false
};

export const bankReducer = (state = initialBankState, action: BankActions): BankData => {
  switch (action.type) {
    case BankActionTypes.LoadCustomerBanks:
      return { ...state, customer_banks_loading: true };

    case BankActionTypes.LoadCustomerBanksSuccess: {
      return { ...state, customer_banks_loading: false, customer_banks: action.payload };
    }

    case BankActionTypes.LoadCustomerBanksFail: {
      return { ...state, customer_banks_loading: false, error: action.payload };
    }

    case BankActionTypes.ResetCustomerBanks: {
      return initialBankState;
    }

    case BankActionTypes.LoadCustomerBankDetails:
      return { ...state, customerbank_detail_loading: true };

    case BankActionTypes.LoadCustomerBankDetailsSuccess: {
      return { ...state, customerbank_detail_loading: false, customerbank_detail: action.payload };
    }

    case BankActionTypes.LoadCustomerBankDetailsFail: {
      return { ...state, customerbank_detail_loading: false, customerbank_detail: null, error: action.payload };
    }

    case BankActionTypes.ResetCRUDBank: {
      return { ...state, error: null };
    }

    default:
      return state;
  }
};
