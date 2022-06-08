import { PhoneActions, PhoneActionTypes } from '../actions/phone.action';
import { DeleteCustomerPhoneSuccess } from '../actions/phone.action';

/**
 * Interface for the 'Address' data used in
 * - AddressState, and
 * - AddressReducer
 */
export interface PhoneData {
  error: any;
  phone: any;
  phone_loading: boolean;
  phone_create: any;
  phone_create_loading: boolean;
  phone_delete: any;
  phone_delete_loading: boolean;
  phone_update: any;
  phone_update_loading: boolean;
}

export interface PhoneState {
  readonly Phone: PhoneData;
}

export const initialPhoneState: PhoneData = {
  error: null,
  phone: null,
  phone_loading: false,
  phone_create: null,
  phone_create_loading: false,
  phone_delete: null,
  phone_delete_loading: false,
  phone_update: null,
  phone_update_loading: false,
};

export const phoneReducer = (state = initialPhoneState, action: PhoneActions): PhoneData => {
  switch (action.type) {
    case PhoneActionTypes.LoadCustomerPhone:
      return { ...state, phone_loading: true };

    case PhoneActionTypes.LoadCustomerPhoneSuccess: {
      return { ...state, phone_loading: false, phone: action.payload };
    }

    case PhoneActionTypes.LoadCustomerPhoneFail: {
      return { ...state, phone_loading: false, error: action.payload };
    }

    case PhoneActionTypes.ResetCustomerPhone: {
      return initialPhoneState;
    }

    case PhoneActionTypes.CreateCustomerPhone:
      return { ...state, phone_create_loading: true };

    case PhoneActionTypes.CreateCustomerPhoneSuccess: {
      return { ...state, phone_create_loading: false, phone_create: action.payload };
    }

    case PhoneActionTypes.CreateCustomerPhoneFail: {
      return { ...state, phone_create_loading: false, phone_create: null, error: action.payload };
    }

    case PhoneActionTypes.UpdateCustomerPhone:
      return { ...state, phone_update_loading: true };

    case PhoneActionTypes.UpdateCustomerPhoneSuccess: {
      return { ...state, phone_update_loading: false, phone_update: action.payload };
    }

    case PhoneActionTypes.UpdateCustomerPhoneFail: {
      return { ...state, phone_update_loading: false, phone_update: null, error: action.payload };
    }

    case PhoneActionTypes.DeleteCustomerPhoneSuccess:
      return { ...state, phone_delete_loading: true };

    case PhoneActionTypes.DeleteCustomerPhoneSuccess: {
      return { ...state, phone_delete_loading: false, phone_delete: action.payload };
    }

    case PhoneActionTypes.DeleteCustomerPhoneFail: {
      return { ...state, phone_delete_loading: false, phone_delete: null, error: action.payload };
    }

    case PhoneActionTypes.ResetCRUDCustomerPhone: {
      return {
        ...state,
        phone_create: null,
        phone_delete: null,
        phone_update: null,
        error: null
      };
    }

    default:
      return state;
  }
};
