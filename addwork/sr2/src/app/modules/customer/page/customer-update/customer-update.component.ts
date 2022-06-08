import { Observable,combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadCustomerBanks } from 'src/app/core/store/actions/bank.action';
import { getCustomerBanks } from 'src/app/core/store/selectors/bank.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { BankService } from 'src/app/core/service/bank.service';
import { getErrorObj } from 'src/app/core/utils/error-utils';
import { CustomerService } from 'src/app/core/service/customer.service';
// import { CreateCustomerGroup, DeleteCustomerGroup, LoadCustomer, LoadCustomerGroups, LoadCustomersDetail, ResetCRUDCustomer } from 'src/app/core/store/actions/customer.action';
// import { createCustomerGroup, createCustomerGroupLoading, deleteCustomerGroup, deleteCustomerGroupLoading, getCustomer, getCustomerError, getCustomerGroups, getCustomerGroupsLoading, getCustomersDetail } from 'src/app/core/store/selectors/customer.selector';
import { getGroups } from 'src/app/core/store/selectors/group.selector';
import { LoadModules } from 'src/app/core/store/actions/module.action';

import { ResetCRUDCustomer, LoadCustomerGroups,CreateCustomerGroup,CreateCustomerGroupSuccess, CreateCustomerGroupFail, DeleteCustomerGroup, DeleteCustomerGroupSuccess, DeleteCustomerGroupFail, LoadCustomer, LoadCustomersDetail, UpdateCustomer, LoadCustomers, UpdateCreateCustomer} from 'src/app/core/store/actions/customer.action';
import { getCustomerGroups,getCustomerError, updateCustomerLoading, getCustomerGroupsLoading, createCustomerGroup, createCustomerLoading,createCustomerGroupLoading, deleteCustomerGroup, deleteCustomerGroupLoading, getCustomer, getCustomersDetail, getCustomerByCustomerID, updateCustomer, updateCreateCustomer, updateCreateCustomerLoading} from 'src/app/core/store/selectors/customer.selector';


import { LoadCustomerGroup,ResetCRUDCustomerGroup } from 'src/app/core/store/actions/customergroup.action';
import { getCustomerMGroups,getCustomerMGroupError, getCustomerMGroupsLoading } from 'src/app/core/store/selectors/customergroup.selector';
import { LoadGroups } from 'src/app/core/store/actions/group.action';

 

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  loading!: boolean;
  customer_banks!: Observable<any[]>;
  customer_banks_loading!: boolean;
  cuid!: any;
  banks: any = [];
  bank_id: any;

  customer:any;
  customer_id:any;

 
 
  groups!: any;
  customer_create_group_loading!: boolean;
  customer_groups_loading!: any;
  customer_groups!: any;
  groups_loading!: boolean
  group_uuid_to_delete!: any
  customer_delete_group_loading!: any

  isEnabled!: boolean;

  createupdateCustomerBankForm = new FormGroup({
    bank_name: new FormControl('', [Validators.required]),
    account_number: new FormControl('', [Validators.required]),
  });
   
  customerGroupForm = new FormGroup({
    group_uuid: new FormControl('', [Validators.required]),
   });
 
  sections!: Observable<any>;
  
  updateCustomerForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    customer_type: new FormControl('', [Validators.required]),
    customer_number: new FormControl('', [Validators.required]),
    // description: new FormControl('', [Validators.required]),
    // section_id: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

 

  constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private bankService: BankService,
    private customerService: CustomerService,) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }

  get group_uuid() {
    return this.customerGroupForm.get('group_uuid') as FormControl;
  }


  get bank_name() {
    return this.createupdateCustomerBankForm.get('bank_name') as FormControl;
  }

  get account_number() {
    return this.createupdateCustomerBankForm.get('account_number') as FormControl;
  }

  get id() {
    return this.createupdateCustomerBankForm.get('id') as FormControl;
  }
/*Update Customer*/
get title() {
  return this.updateCustomerForm.get('title') as FormControl;
}

get firstname() {
  return this.updateCustomerForm.get('firstname') as FormControl;
}
get lastname() {
  return this.updateCustomerForm.get('lastname') as FormControl;
}
get date_of_birth() {
  return this.updateCustomerForm.get('date_of_birth') as FormControl;
}
get gender() {
  return this.updateCustomerForm.get('gender') as FormControl;
}
get country() {
  return this.updateCustomerForm.get('country') as FormControl;
}
get state() {
  return this.updateCustomerForm.get('state') as FormControl;
}
get customer_type() {
  return this.updateCustomerForm.get('customer_type') as FormControl;
}
get customer_number() {
  return this.updateCustomerForm.get('customer_number') as FormControl;
}
get active() {
  return this.updateCustomerForm.get('active') as FormControl;
}



  ngOnInit(): void {
    this.getCustomerInfo();
    this.getAllBanks();
    this.getCustomerDetail();
    // this.setFormValues();
    this.getCustomerGroups();
    // this.men()
  }


  setFormValues(id: any) {
    const vcust = this.customer.find((cuInf:{ID:any;}) =>cuInf.ID ==id);
    if (vcust) {
      this.customer = vcust;
      this.title.setValue(vcust.Title);
      this.firstname.setValue(vcust.FirstName);
      this.lastname.setValue(vcust.LastName);
      this.date_of_birth.setValue(vcust.DateOfBirth);
      this.gender.setValue(vcust.Gender);
      this.country.setValue(vcust.Country);
      this.state.setValue(vcust.State);
      this.customer_number.setValue(vcust.CustomerNumber);
      this.customer_type.setValue(vcust.CustomerType);
      this.active.setValue(vcust.Active);
    }
    
  }

  updateCustomer(form: FormGroupDirective) {
    if (this.updateCustomerForm.valid) {
      this.store.dispatch(new UpdateCreateCustomer({...this.updateCustomerForm.value, uuid: this.cuid}));
      combineLatest(([this.store.select(updateCreateCustomerLoading), this.store.select(updateCreateCustomer), this.store.select(getCustomerError)]))
        .subscribe(([loading, resp, error]) => {
          this.loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDCustomer());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDCustomer());
          }
        });
    }
  }

  getCustomerInfo() {
  //  console.log(this.cuid);
   this.store.dispatch(new LoadCustomer({uuid:this.cuid}));
   this.store.select(getCustomer).subscribe(cust =>{
    if (cust) {
      this.customer = cust;
     }
   })
  }

  getAllBanks() {
    this.store.dispatch(new LoadCustomerBanks());
    this.customer_banks = this.store.select(getCustomerBanks);
  }

  createupdateCustomerBank(form: FormGroupDirective) {
    if (form.valid) {
      const data = this.bank_id ?
        {...form.value, cuid: this.cuid, id: this.bank_id} : {...form.value, cuid: this.cuid};
      this.bankService.createupdateBank(data).subscribe(bank => {
        this.notifyService.showSuccess(bank.message);
        this.getCustomerDetail();
        form.resetForm();
      }, error => {
        this.notifyService.showError(getErrorObj(error).msg);
      });
    }
  }

  getCustomerDetail() {
    this.store.dispatch(new LoadCustomersDetail({ uuid: this.cuid }));
    this.store.select(getCustomersDetail).subscribe(customer => {
      if (customer) {
        this.banks = customer.banks;
      }
    });
  }

  setBankUpdateFormValue(id: any) {
    const selected_bank = this.banks.find((bank: { ID: any; }) => bank.ID == id);
    if (selected_bank) {
      this.account_number.setValue(selected_bank.AccountNumber);
      this.bank_name.setValue(selected_bank.BankName);
      this.bank_id = id;
    }
  }


//  Customer Group Section below


getCustomerGroups() {
  this.store.dispatch(new LoadCustomerGroups({ uuid: this.cuid }));
  combineLatest(([this.store.select(getCustomerGroupsLoading),this.store.select(getCustomerGroups), this.store.select(getCustomerError)]))
  .subscribe( ([ loading,resp, error])=>{
    this.customer_groups_loading = loading;
    if(error){
      this.notifyService.showError(error.msg);
      this.store.dispatch(new ResetCRUDCustomerGroup());
    }
    if(resp){
      this.customer_groups = (resp[0]).groups;
    }
  });   

  this.store.dispatch(new LoadCustomerGroup());
  combineLatest(([this.store.select(getCustomerMGroups), this.store.select(getCustomerMGroupError), this.store.select(getCustomerMGroupsLoading)]))
  .subscribe( ([resp, error, loading])=>{
    this.customer_create_group_loading = loading;
    if(error){
      this.notifyService.showError(error.msg);
      this.store.dispatch(new ResetCRUDCustomerGroup());
    }
    if(resp){
      this.groups = resp;
    }
  }); 
}

addCustomerToGroups(form: FormGroupDirective) {
  if (this.customerGroupForm.valid) {
    const data = {...this.customerGroupForm.value, customer_uuid: [this.cuid]};
    this.store.dispatch(new CreateCustomerGroup(data));
    combineLatest(([this.store.select(createCustomerGroupLoading), this.store.select(createCustomerGroup), this.store.select(getCustomerError)]))
      .subscribe(([loading, resp, error]) => {
        this.customer_create_group_loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDCustomer());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          this.store.dispatch(new ResetCRUDCustomer());
          this.getCustomerGroups();
        }
      });
  }
}

removeCustomerFromGroup() {
  const data = { group_uuid: this.group_uuid_to_delete, customer_uuid: [this.cuid]};
    this.store.dispatch(new DeleteCustomerGroup(data));
    combineLatest(([this.store.select(deleteCustomerGroupLoading), this.store.select(deleteCustomerGroup), this.store.select(getCustomerError)]))
      .subscribe(([loading, resp, error]) => {
        this.customer_delete_group_loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDCustomer());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          this.store.dispatch(new ResetCRUDCustomer());
          this.getCustomerGroups();
        }
      });
}



 


}
