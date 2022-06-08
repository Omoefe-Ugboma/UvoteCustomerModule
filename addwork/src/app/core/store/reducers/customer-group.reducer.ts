import { CustomerGroupActions, CustomerGroupActionTypes } from '../actions/customergroup.action';

/**
 * Interface for the 'Group' data used in
 * - GroupState, and
 * - GroupReducer
 */
export interface CustomerGroupData {
  error: any;
  customer_groups: any;
  customer_groups_loading: boolean;
  customer_groups_create: any;
  customer_groups_create_loading: boolean;
  customer_groups_update: any;
  customer_groups_update_loading: boolean;
}

export interface CustomerGroupState {
  readonly CustomerGroup: CustomerGroupData;
}

export const initialCustomerGroupState: CustomerGroupData = {
  error: null,
  customer_groups: null,
  customer_groups_loading: false,
  customer_groups_create: null,
  customer_groups_create_loading: false,
  customer_groups_update: null,
  customer_groups_update_loading: false,
};

export const customerGroupReducer = (state = initialCustomerGroupState, action: CustomerGroupActions): CustomerGroupData => {
  switch (action.type) {
    case CustomerGroupActionTypes.LoadCustomerGroup:
      return { ...state, customer_groups_loading: true };

    case CustomerGroupActionTypes.LoadCustomerGroupsSuccess: {
      return { ...state, customer_groups_loading: false, customer_groups: action.payload };
    }

    case CustomerGroupActionTypes.LoadCustomerGroupsFail: {
      return { ...state, customer_groups_loading: false, error: action.payload };
    }

    case CustomerGroupActionTypes.ResetCustomerGroups: {
      return initialCustomerGroupState;
    }

    case CustomerGroupActionTypes.CreateCustomerGroup:
      return { ...state, customer_groups_create_loading: true };

    case CustomerGroupActionTypes.CreateCustomerGroupSuccess: {
      return { ...state, customer_groups_create_loading: false, customer_groups_create: action.payload };
    }

    case CustomerGroupActionTypes.CreateCustomerGroupFail: {
      return { ...state, customer_groups_create_loading: false, customer_groups_create: null, error: action.payload };
    }

    case CustomerGroupActionTypes.UpdateCustomerGroup:
      return { ...state, customer_groups_update_loading: true };

    case CustomerGroupActionTypes.UpdateCustomerGroupSuccess: {
      return { ...state, customer_groups_update_loading: false, customer_groups_update: action.payload };
    }

    case CustomerGroupActionTypes.UpdateCustomerGroupFail: {
      return { ...state, customer_groups_update_loading: false, customer_groups_update: null, error: action.payload };
    }

    case CustomerGroupActionTypes.ResetCRUDCustomerGroups: {
      return {
        ...state,
        customer_groups_create: null,
        customer_groups_update: null,
        error: null
      };
    }

    default:
      return state;
  }
};
