import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { authReducer } from './auth.reducer';
import { userReducer } from './user.reducer';
import { groupReducer } from './group.reducer';
import { moduleReducer } from './module.reducer';
import { sectionReducer } from './section.reducer';
import { menuReducer } from './menu.reducer';
import { AccountOfficerReducer } from './account-officer.reducer';
import { bankReducer } from './bank.reducer';
import { customerReducer } from './customer.reducer';
import { customerdraftnotReducer } from './customerdraftnot.reducer';
import { customerwaitApprovalReducer } from './customerwaitApproval.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  auth: authReducer,
  user: userReducer,
  group: groupReducer,
  module: moduleReducer,
  section: sectionReducer,
  menu: menuReducer,
  account_officer: AccountOfficerReducer,
  bank: bankReducer,
  customer: customerReducer,
  customerdraft:customerdraftnotReducer,
  customerwaitApproval:customerwaitApprovalReducer,
};
