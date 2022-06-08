import { BankData, initialBankState } from './../reducers/bank.reducer';
import { MenuData, initialMenuState } from './../reducers/menu.reducer';
import { initialSectionState, SectionData } from './../reducers/section.reducer';
import { initialUserState, UserData } from '../reducers/user.reducer';
import { initialAuthState, AuthData } from './../reducers/auth.reducer';
import { initialGroupState, GroupData } from './../reducers/group.reducer';
import { initialModuleState, ModuleData } from './../reducers/module.reducer';
import { CustomerData, initialCustomerState } from '../reducers/customer.reducer';
import { AccountOfficerData, initialAccountOfficerState } from '../reducers/account-officer.reducer';
import { AddressData, initialAddressState } from '../reducers/address.reducer';
import { initialPhoneState, PhoneData } from '../reducers/phone.reducer';
import { CustomerGroupData, initialCustomerGroupState } from '../reducers/customer-group.reducer';

export interface AppState {
  auth: AuthData;
  user: UserData;
  group: GroupData;
  module: ModuleData;
  section: SectionData;
  menu: MenuData;
  bank: BankData,
  customer: CustomerData;
  address: AddressData;
  phone: PhoneData;
  account_officer: AccountOfficerData;
  customer_group: CustomerGroupData;
}

export const InitialAppState: AppState =  {
  auth: initialAuthState,
  user: initialUserState,
  group: initialGroupState,
  module: initialModuleState,
  section: initialSectionState,
  menu: initialMenuState,
  bank: initialBankState,
  address:initialAddressState,
  phone:initialPhoneState,
  customer: initialCustomerState,
  account_officer: initialAccountOfficerState,
  customer_group: initialCustomerGroupState
};
