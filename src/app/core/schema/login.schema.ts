import { FormlyFieldConfig } from '@ngx-formly/core';

export interface LoginReq {
  username: string;
  password: string;
  ip_address: string;
  machine_name: string;
}

export interface LoginUser {
  ID: string;
  UUID: string;
  Email: string;
  UserName: string;
  PassKey: string;
  FullName: string;
  Status: string;
  LockoutStatus: string;
  IsAdmin: string;
  LoginAttempt: string;
  LoggedIn: number;
  DateCreated: string;
  UpdatedBy: string;
  CreatedBy: string;
  FirstName: string;
  LastName: string;
  LastLogonDate: string;
  ChangePassword: string;
}

export const LoginFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    defaultValue: '',
    templateOptions: {
      label: 'Username',
      required: true,
      placeholder: 'Enter your username or email',
    }
  },
  {
    key: 'password',
    type: 'input',
    defaultValue: '',
    templateOptions: {
      label: 'Password',
      type: 'password',
      required: true,
      placeholder: 'Enter your password',
    }
  },
  { key: 'ip_address' },
  { key: 'machine_name' }
]
