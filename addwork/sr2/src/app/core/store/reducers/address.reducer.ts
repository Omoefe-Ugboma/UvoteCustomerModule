import { AddressActions, AddressActionTypes } from '../actions/address.action';
import { DeleteCustomerAddressSuccess } from './../actions/address.action';

/**
 * Interface for the 'Address' data used in
 * - AddressState, and
 * - AddressReducer
 */
export interface AddressData {
  error: any;
  address: any;
  address_loading: boolean;
  address_create: any;
  address_create_loading: boolean;
  address_delete: any;
  address_delete_loading: boolean;
  address_update: any;
  address_update_loading: boolean;
}

export interface AddressState {
  readonly Address: AddressData;
}

export const initialAddressState: AddressData = {
  error: null,
  address: null,
  address_loading: false,
  address_create: null,
  address_create_loading: false,
  address_delete: null,
  address_delete_loading: false,
  address_update: null,
  address_update_loading: false,
};

export const addressReducer = (state = initialAddressState, action: AddressActions): AddressData => {
  switch (action.type) {
    case AddressActionTypes.LoadCustomerAddress:
      return { ...state, address_loading: true };

    case AddressActionTypes.LoadCustomerAddressSuccess: {
      return { ...state, address_loading: false, address: action.payload };
    }

    case AddressActionTypes.LoadCustomerAddressFail: {
      return { ...state, address_loading: false, error: action.payload };
    }

    case AddressActionTypes.ResetCustomerAddress: {
      return initialAddressState;
    }

    case AddressActionTypes.CreateCustomerAddress:
      return { ...state, address_create_loading: true };

    case AddressActionTypes.CreateCustomerAddressSuccess: {
      return { ...state, address_create_loading: false, address_create: action.payload };
    }

    case AddressActionTypes.CreateCustomerAddressFail: {
      return { ...state, address_create_loading: false, address_create: null, error: action.payload };
    }

    case AddressActionTypes.UpdateCustomerAddress:
      return { ...state, address_update_loading: true };

    case AddressActionTypes.UpdateCustomerAddressSuccess: {
      return { ...state, address_update_loading: false, address_update: action.payload };
    }

    case AddressActionTypes.UpdateCustomerAddressFail: {
      return { ...state, address_update_loading: false, address_update: null, error: action.payload };
    }

    case AddressActionTypes.DeleteCustomerAddressSuccess:
      return { ...state, address_delete_loading: true };

    case AddressActionTypes.DeleteCustomerAddressSuccess: {
      return { ...state, address_delete_loading: false, address_delete: action.payload };
    }

    case AddressActionTypes.DeleteCustomerAddressFail: {
      return { ...state, address_delete_loading: false, address_delete: null, error: action.payload };
    }

    case AddressActionTypes.ResetCRUDCustomerAddress: {
      return {
        ...state,
        address_create: null,
        address_delete: null,
        address_update: null,
        error: null
      };
    }

    default:
      return state;
  }
};
