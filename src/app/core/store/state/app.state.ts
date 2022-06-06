import { MenuData, initialMenuState } from './../reducers/menu.reducer';
import { initialSectionState, SectionData } from './../reducers/section.reducer';
import { initialUserState, UserData } from '../reducers/user.reducer';
import { initialAuthState, AuthData } from './../reducers/auth.reducer';
import { initialGroupState, GroupData } from './../reducers/group.reducer';
import { AccountOfficerData, initialAccountOfficerState } from '../reducers/account-officer.reducer';
import { initialModuleState, ModuleData } from './../reducers/module.reducer';
import { CustomerData, initialCustomerState } from '../reducers/customer.reducer';
import { BankData, initialBankState } from './../reducers/bank.reducer';
import{ CustomerdraftData, initialCustomerDraftState} from './../reducers/customerdraftnot.reducer';
import { CustomerwaitApprovalData, initialCustomerWaitApprovalState } from '../reducers/customerwaitApproval.reducer';

export interface AppState {
  [x: string]: any;
  auth: AuthData;
  user: UserData;
  group: GroupData;
  module: ModuleData;
  section: SectionData;
  menu: MenuData;
  bank: BankData;
  account_officer: AccountOfficerData;
  customer: CustomerData;
  customerdraft:CustomerdraftData;
  customerwaitApproval:CustomerwaitApprovalData;
}

export const InitialAppState: AppState =  {
  auth: initialAuthState,
  user: initialUserState,
  group: initialGroupState,
  module: initialModuleState,
  section: initialSectionState,
  menu: initialMenuState,
  bank: initialBankState,
  account_officer: initialAccountOfficerState,
  customer: initialCustomerState,
  customerdraft:initialCustomerDraftState,
  customerwaitApproval:initialCustomerWaitApprovalState,
};
