// import { CustomerActionTypes } from '../actions/customer.action';
import { CustomerwaitApprovalActionTypes, CustomerwaitApprovalActions } from '../actions/customerWaitApproval.action copy';

/**
 * Interface for the 'Customer' data used in
 * - CustomerState, and
 * - CustomerReducer
 */
export interface CustomerwaitApprovalData {
  [x: string]: any;
  error: any;
  accountofficers: any;
  accountofficers_loading: boolean;


  customerwaitApproval: any;
  customerwaitApproval_loading: boolean;

}

export interface CustomerState {
  readonly Customer: CustomerwaitApprovalData;
}

export const initialCustomerWaitApprovalState: CustomerwaitApprovalData = {
  error: null,
  accountofficers: null,
  accountofficers_loading: false,



  customerwaitApproval: null,
  customerwaitApproval_loading: false,

  
  // customer: null,
  // customer_loading: false,

  // customers_create: null,
  // customers_create_loading: false,
};

export const customerwaitApprovalReducer = (state = initialCustomerWaitApprovalState, action: CustomerwaitApprovalActions): CustomerwaitApprovalData => {
  switch (action.type) {
    case CustomerwaitApprovalActionTypes.LoadAccountOfficers:
      return { ...state, accountofficers_loading: true };

    case CustomerwaitApprovalActionTypes.LoadAccountOfficersSuccess: {
      return { ...state, accountofficers_loading: false, accountofficers: action.payload };
    }

    case CustomerwaitApprovalActionTypes.LoadAccountOfficersFail: {
      return { ...state, accountofficers_loading: false, error: action.payload };
    }
    
    
    case CustomerwaitApprovalActionTypes.LoadCustomerswaitApproval:
      return { ...state, customerwaitApproval_loading: true };

    case CustomerwaitApprovalActionTypes.LoadCustomerswaitApprovalSuccess: {
      return { ...state, customerwaitApproval_loading: false, customerwaitApproval: action.payload };
    }

    case CustomerwaitApprovalActionTypes.LoadCustomerswaitApprovalFail: {
      return { ...state, customerwaitApproval_loading: false, error: action.payload };
    }


    case CustomerwaitApprovalActionTypes.ResetCRUDCustomer: {
      return {
        ...state, error: null
      };
    }

    default:
      return state;
  }
};
