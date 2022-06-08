import { EmailActions, EmailActionTypes } from '../actions/email.action';
import { DeleteCustomerEmailSuccess } from '../actions/email.action';

/**
 * Interface for the 'Address' data used in
 * - AddressState, and
 * - AddressReducer
 */
export interface EmailData {
  error: any;
  email: any;
  email_loading: boolean;
  email_create: any;
  email_create_loading: boolean;
  email_delete: any;
  email_delete_loading: boolean;
  email_update: any;
  email_update_loading: boolean;
}

export interface State {
  readonly Email: EmailData;
}

export const initialEmailState: EmailData = {
  error: null,
  email: null,
  email_loading: false,
  email_create: null,
  email_create_loading: false,
  email_delete: null,
  email_delete_loading: false,
  email_update: null,
  email_update_loading: false,
};

export const emailReducer = (state = initialEmailState, action: EmailActions): EmailData => {
  switch (action.type) {
    case EmailActionTypes.LoadCustomerEmail:
      return { ...state, email_loading: true };

    case EmailActionTypes.LoadCustomerEmailSuccess: {
      return { ...state, email_loading: false, email: action.payload };
    }

    case EmailActionTypes.LoadCustomerEmailFail: {
      return { ...state, email_loading: false, error: action.payload };
    }

    case EmailActionTypes.ResetCustomerEmail: {
      return initialEmailState;
    }

    case EmailActionTypes.CreateCustomerEmail:
      return { ...state, email_create_loading: true };

    case EmailActionTypes.CreateCustomerEmailSuccess: {
      return { ...state, email_create_loading: false, email_create: action.payload };
    }

    case EmailActionTypes.CreateCustomerEmailFail: {
      return { ...state, email_create_loading: false, email_create: null, error: action.payload };
    }

    case EmailActionTypes.UpdateCustomerEmail:
      return { ...state, email_update_loading: true };

    case EmailActionTypes.UpdateCustomerEmailSuccess: {
      return { ...state, email_update_loading: false, email_update: action.payload };
    }

    case EmailActionTypes.UpdateCustomerEmailFail: {
      return { ...state, email_update_loading: false, email_update: null, error: action.payload };
    }

    case EmailActionTypes.DeleteCustomerEmailSuccess:
      return { ...state, email_delete_loading: true };

    case EmailActionTypes.DeleteCustomerEmailSuccess: {
      return { ...state, email_delete_loading: false, email_delete: action.payload };
    }

    case EmailActionTypes.DeleteCustomerEmailFail: {
      return { ...state, email_delete_loading: false, email_delete: null, error: action.payload };
    }

    case EmailActionTypes.ResetCRUDCustomerEmail: {
      return {
        ...state,
        email_create: null,
        email_delete: null,
        email_update: null,
        error: null
      };
    }

    default:
      return state;
  }
};
