import { FormlyFieldConfig } from "@ngx-formly/core";

export interface CustomerInfo {
  ID: string;
  CustomerNumber: string;
  FirstName: string;
  LastName: string;
  Name: string;
  DateOfBirth: string;
  Gender: string;
  Country: string;
  State: string;
  CustomerType: string;
  DateCreated: string;
  CreatedBy: string;
  CUID: string;
  Title: string;
  Status: string;
  AccountOfficerID: string;
  AccountOfficerName: string;
  AccountOfficerPhone: string;
  AccountOfficerEmail: string;
}

export interface CustomerInfoReq {
  uuid: string;
  firstname: string;
  lastname: string;
  date_of_birth: string;
  gender: string;
  country: string;
  state: string;
  customer_type: string;
  customer_number: string;
  officer_id: string;
  title: string;
}

export const CustomerInfoFields: FormlyFieldConfig[] = [
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'select',
        key: 'title',
        defaultValue: '',
        templateOptions: {
          label: 'Title',
          required: true,
          options: [
            { label: 'Mr', value: 'Mr' },
            { label: 'Mrs', value: 'Mrs' },
            { label: 'Miss', value: 'Miss' },
            { label: 'Dr', value: 'Dr' },
            { label: 'Chief', value: 'Chief' },
          ]
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'firstname',
        defaultValue: '',
        templateOptions: {
          label: 'First Name',
          required: true,
          inputClass: 'form-control-sm'
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'lastname',
        defaultValue: '',
        templateOptions: {
          label: 'Last Name',
          required: true,
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'customer_number',
        defaultValue: '',
        templateOptions: {
          label: 'Customer Number',
          required: true,
        }
      },
    ]
  },
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'date_of_birth',
        defaultValue: '',
        templateOptions: {
          label: 'Date of Birth',
          required: true,
          type: 'date',
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'select',
        key: 'gender',
        defaultValue: '',
        templateOptions: {
          label: 'Gender',
          required: true,
          options: [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ]
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'country',
        defaultValue: '',
        templateOptions: {
          label: 'Country',
          required: true,
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'state',
        defaultValue: '',
        templateOptions: {
          label: 'State',
          required: true,
        }
      },
    ]
  },
  {
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'input',
        key: 'customer_type',
        defaultValue: '',
        templateOptions: {
          label: 'Customer Type',
          required: true,
        }
      },
      {
        className: 'col-md-3 pr-1 pl-1',
        type: 'select',
        key: 'officer_id',
        defaultValue: '',
        templateOptions: {
          label: 'Account Officer',
          options: [],
          valueProp: 'AccountOfficerID',
          labelProp: 'Name'
        }
      },
    ]
  }
];

export interface AccountOfficers {
  CreatedBy: string;
  DateCreated: string;
  DateUpdated: string;
  Email: string;
  FirstName: string;
  ID: string;
  LastName: string;
  Name: string;
  OfficerID: string;
  Phone: string;
  UpdatedBy: string;
}
