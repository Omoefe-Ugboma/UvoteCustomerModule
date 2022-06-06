import { AccountOfficerActions, AccountOfficerActionTypes } from '../actions/account-officer.action';

/**
 * Interface for the 'Customer' data used in
 * - CustomerState, and
 * - CustomerReducer
 */
export interface AccountOfficerData {
  error: any;
  account_officers: any;
  account_officers_loading: boolean;
  // customers_create: any;
  // customers_create_loading: boolean;
  // customers_update: any;
  // customers_update_loading: boolean;
  // customer_groups: any;
  // customer_groups_loading: boolean;
  // customer_group_create: any;
  // customer_group_create_loading: boolean;
  // customer_group_delete: any;
  // customer_group_delete_loading: boolean;
}

export interface AccountOfficerState {
  readonly AccountOfficer: AccountOfficerData;
}

export const initialAccountOfficerState: AccountOfficerData = {
  error: null,
  account_officers: null,
  account_officers_loading: false,
  // customers_create: null,
  // customers_create_loading: false,
  // customers_update: null,
  // customers_update_loading: false,
  // customer_groups: null,
  // customer_groups_loading: false,
  // customer_group_create: null,
  // customer_group_create_loading: false,
  // customer_group_delete: null,
  // customer_group_delete_loading: false
};

export const AccountOfficerReducer = (state = initialAccountOfficerState, action: AccountOfficerActions): AccountOfficerData => {
  switch (action.type) {
    case AccountOfficerActionTypes.LoadAccountOfficers:
      return { ...state, account_officers_loading: true };

    case AccountOfficerActionTypes.LoadAccountOfficersSuccess: {
      return { ...state, account_officers_loading: false, account_officers: action.payload };
    }

    case AccountOfficerActionTypes.LoadAccountOfficersFail: {
      return { ...state, account_officers_loading: false, error: action.payload };
    }

    // case CustomerActionTypes.ResetCustomers: {
    //   return initialCustomerState;
    // }

    // case CustomerActionTypes.CreateCustomer:
    //   return { ...state, customers_create_loading: true };

    // case CustomerActionTypes.CreateCustomerSuccess: {
    //   return { ...state, customers_create_loading: false, customers_create: action.payload };
    // }

    // case CustomerActionTypes.CreateCustomerFail: {
    //   return { ...state, customers_create_loading: false, customers_create: null, error: action.payload };
    // }

    // case CustomerActionTypes.UpdateCustomer:
    //   return { ...state, customers_update_loading: true };

    // case CustomerActionTypes.UpdateCustomerSuccess: {
    //   return { ...state, customers_update_loading: false, customers_update: action.payload };
    // }

    // case CustomerActionTypes.UpdateCustomerFail: {
    //   return { ...state, customers_update_loading: false, customers_update: null, error: action.payload };
    // }

    // case CustomerActionTypes.LoadCustomerGroups:
    //   return { ...state, customer_groups_loading: true };

    // case CustomerActionTypes.LoadCustomerGroupsSuccess: {
    //   return { ...state, customer_groups_loading: false, customer_groups: action.payload };
    // }

    // case CustomerActionTypes.LoadCustomerGroupsFail: {
    //   return { ...state, customer_groups_loading: false, customer_groups: null, error: action.payload };
    // }

    // case CustomerActionTypes.CreateCustomerGroup:
    //   return { ...state, customer_group_create_loading: true };

    // case CustomerActionTypes.CreateCustomerGroupSuccess: {
    //   return { ...state, customer_group_create_loading: false, customer_group_create: action.payload };
    // }

    // case CustomerActionTypes.CreateCustomerGroupFail: {
    //   return { ...state, customer_group_create_loading: false, customer_group_create: null, error: action.payload };
    // }

    // case CustomerActionTypes.DeleteCustomerGroup:
    //   return { ...state, customer_group_delete_loading: true };

    // case CustomerActionTypes.DeleteCustomerGroupSuccess: {
    //   return { ...state, customer_group_delete_loading: false, customer_group_delete: action.payload };
    // }

    // case CustomerActionTypes.DeleteCustomerGroupFail: {
    //   return { ...state, customer_group_delete_loading: false, customer_group_delete: null, error: action.payload };
    // }

    // case CustomerActionTypes.ResetCRUDCustomer: {
    //   return {
    //     ...state,
    //     customers_create: null,
    //     customers_update: null,
    //     customer_group_create: null,
    //     customer_group_delete: null,
    //     error: null
    //   };
    // }

    default:
      return state;
  }
};
