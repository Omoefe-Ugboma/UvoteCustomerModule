// import { CustomerActionTypes } from '../actions/customer.action';
import { CustomerdraftActionTypes, CustomerdraftActions } from '../actions/customerdraftnot.action';

/**
 * Interface for the 'Customer' data used in
 * - CustomerState, and
 * - CustomerReducer
 */
export interface CustomerdraftData {
  [x: string]: any;
  error: any;
  accountofficers: any;
  accountofficers_loading: boolean;


  customerdraftnot: any;
  customerdratnot_loading: boolean;

}

export interface CustomerState {
  readonly Customer: CustomerdraftData;
}

export const initialCustomerDraftState: CustomerdraftData = {
  error: null,
  accountofficers: null,
  accountofficers_loading: false,



  customerdraftnot: null,
  customerdratnot_loading: false,

  
  // customer: null,
  // customer_loading: false,

  // customers_create: null,
  // customers_create_loading: false,
};

export const customerdraftnotReducer = (state = initialCustomerDraftState, action: CustomerdraftActions): CustomerdraftData => {
  switch (action.type) {
    case CustomerdraftActionTypes.LoadAccountOfficers:
      return { ...state, accountofficers_loading: true };

    case CustomerdraftActionTypes.LoadAccountOfficersSuccess: {
      return { ...state, accountofficers_loading: false, accountofficers: action.payload };
    }

    case CustomerdraftActionTypes.LoadAccountOfficersFail: {
      return { ...state, accountofficers_loading: false, error: action.payload };
    }
    
    
    case CustomerdraftActionTypes.LoadCustomersInDraftNotSub:
      return { ...state, customerdratnot_loading: true };

    case CustomerdraftActionTypes.LoadCustomersInDraftNotSubSuccess: {
      return { ...state, customerdratnot_loading: false, customerdraftnot: action.payload };
    }

    case CustomerdraftActionTypes.LoadCustomersInDraftNotSubFail: {
      return { ...state, customerdratnot_loading: false, error: action.payload };
    }


    case CustomerdraftActionTypes.ResetCRUDCustomer: {
      return {
        ...state, error: null
      };
    }

    default:
      return state;
  }
};
