import { Action } from '@ngrx/store';

export enum BankActionTypes {
  LoadCustomerBanks = '[CustomerBanks] Load CustomerBanks',
  LoadCustomerBanksSuccess = '[CustomerBanks] Load CustomerBanks Success',
  LoadCustomerBanksFail = '[CustomerBanks] Load CustomerBanks Fail',

  LoadCustomerBankDetails = '[BankGroup] Load BankGroup',
  LoadCustomerBankDetailsSuccess = '[BankGroup] Load BankGroup Success',
  LoadCustomerBankDetailsFail = '[BankGroup] Load BankGroup Fail',

  ResetCustomerBanks = '[CustomerBanks] Reset Bank',
  ResetCRUDBank = '[CustomerBanks] Reset Created Bank',
}

export class LoadCustomerBanks implements Action {
  readonly type = BankActionTypes.LoadCustomerBanks;
}

export class LoadCustomerBanksSuccess implements Action {
  readonly type = BankActionTypes.LoadCustomerBanksSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerBanksFail implements Action {
  readonly type = BankActionTypes.LoadCustomerBanksFail;
  constructor(public payload: any) {}
}

export class ResetCustomerBanks implements Action {
  readonly type = BankActionTypes.ResetCustomerBanks;
}

export class LoadCustomerBankDetails implements Action {
  readonly type = BankActionTypes.LoadCustomerBankDetails;
  constructor(public payload: any) {}
}

export class LoadCustomerBankDetailsSuccess implements Action {
  readonly type = BankActionTypes.LoadCustomerBankDetailsSuccess;
  constructor(public payload: any) {}
}

export class LoadCustomerBankDetailsFail implements Action {
  readonly type = BankActionTypes.LoadCustomerBankDetailsFail;
  constructor(public payload: any) {}
}

export class ResetCRUDBank implements Action {
  readonly type = BankActionTypes.ResetCRUDBank;
}

export type BankActions = LoadCustomerBanks | LoadCustomerBanksSuccess | LoadCustomerBanksFail | ResetCustomerBanks |
  LoadCustomerBankDetails | LoadCustomerBankDetailsSuccess | LoadCustomerBankDetailsFail | ResetCRUDBank;
