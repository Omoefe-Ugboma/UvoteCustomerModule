import { CustomerActions, CustomerActionTypes } from '../actions/customer.action';

/**
 * Interface for the 'Customer' data used in
 * - CustomerState, and
 * - CustomerReducer
 */
export interface CustomerData {
  [x: string]: any;
  error: any;
  accountofficers: any;
  accountofficers_loading: boolean;

  customers: any;
  customers_loading: boolean;

  customers_update: any;
  customers_update_loading: boolean;

  customer: any;
  customer_loading: boolean;

  // customerdraftnot: any;
  // customerdratnot_loading: boolean;

  customers_create: any;
  customers_create_loading: boolean;
}

export interface CustomerState {
  readonly Customer: CustomerData;
}

export const initialCustomerState: CustomerData = {
  error: null,
  accountofficers: null,
  accountofficers_loading: false,

  customers: null,
  customers_loading: false,

  // customerdraftnot: null,
  // customerdratnot_loading: false,

  customers_update: null,
  customers_update_loading: false,

  customer: null,
  customer_loading: false,
  
  // customer: null,
  // customer_loading: false,

  customers_create: null,
  customers_create_loading: false,
};

export const customerReducer = (state = initialCustomerState, action: CustomerActions): CustomerData => {
  switch (action.type) {
    case CustomerActionTypes.LoadAccountOfficers:
      return { ...state, accountofficers_loading: true };

    case CustomerActionTypes.LoadAccountOfficersSuccess: {
      return { ...state, accountofficers_loading: false, accountofficers: action.payload };
    }

    case CustomerActionTypes.LoadAccountOfficersFail: {
      return { ...state, accountofficers_loading: false, error: action.payload };
    }
    
    case CustomerActionTypes.LoadCustomers:
      return { ...state, customers_loading: true };

    case CustomerActionTypes.LoadCustomersSuccess: {
      return { ...state, customers_loading: false, customers: action.payload };
    }

    case CustomerActionTypes.LoadCustomersFail: {
      return { ...state, customers_loading: false, error: action.payload };
    }

    
    // case CustomerActionTypes.LoadCustomersInDraftNotSub:
    //   return { ...state, customerdratnot_loading: true };

    // case CustomerActionTypes.LoadCustomersInDraftNotSubSuccess: {
    //   return { ...state, customerdratnot_loading: false, customerdraftnot: action.payload };
    // }

    // case CustomerActionTypes.LoadCustomersInDraftNotSubFail: {
    //   return { ...state, customerdratnot_loading: false, error: action.payload };
    // }

    case CustomerActionTypes.UpdateCustomer:
      return { ...state, customers_update_loading: true };

    case CustomerActionTypes.UpdateCustomerSuccess: {
      return { ...state, customers_update_loading: false, customers_update: action.payload };
    }

    case CustomerActionTypes.UpdateCustomerFail: {
      return { ...state, customers_update_loading: false, customers_update: null, error: action.payload };
    }

    
    case CustomerActionTypes.CreateCustomerDraft:
      return { ...state, customers_create_loading: true };

    case CustomerActionTypes.CreateCustomerDraftSuccess: {
      return { ...state, customers_create_loading: false, customers_create: action.payload };
    }

    case CustomerActionTypes.CreateCustomerDraftFail: {
      return { ...state, customers_create_loading: false, customers_create: null, error: action.payload };
    }


    case CustomerActionTypes.ResetCRUDCustomer: {
      return {
        ...state, error: null,
        customers_update: null
      };
    }

    default:
      return state;
  }
};
