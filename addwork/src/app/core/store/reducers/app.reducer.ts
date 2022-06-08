import { customerReducer } from './customer.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { groupReducer } from './group.reducer';
import { moduleReducer } from './module.reducer';
import { sectionReducer } from './section.reducer';
import { menuReducer } from './menu.reducer';
import { bankReducer } from './bank.reducer';
import { AccountOfficerReducer } from './account-officer.reducer';
import { addressReducer } from './address.reducer';
import { emailReducer } from './email.reducer';
import { phoneReducer } from './phone.reducer';
import { customerGroupReducer } from './customer-group.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  auth: authReducer,
  user: userReducer,
  group: groupReducer,
  module: moduleReducer,
  section: sectionReducer,
  menu: menuReducer,
  bank: bankReducer,
  customer: customerReducer,
  account_officer: AccountOfficerReducer,
  address: addressReducer,
  phone: phoneReducer,
  email: emailReducer,
  customer_group: customerGroupReducer,
};
