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
import { CreateCustomerAddress, LoadCustomerAddress, ResetCRUDCustomerAddress } from 'src/app/core/store/actions/address.action';
import { createCustomerAddress, createCustomerAddressLoading, getCustomerAddress, getCustomerAddressError } from 'src/app/core/store/selectors/address.selector';
import { AddressService } from './../../../../core/service/address.service';
import { EmailService } from 'src/app/core/service/email.service';
import { LoadCustomerEmail } from 'src/app/core/store/actions/email.action';
import { getCustomerEmail } from './../../../../core/store/selectors/email.selector';

 

 

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer_email!: Observable<any[]>;
  customer_email_loading!: boolean;
  loading!: boolean;
  cuid!: any;
  cust_email: any =[];
  isEnabled!: boolean;
  email_id:any;

  constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }

  createupdateCustomerEmailForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    email2: new FormControl('', [Validators.required]),
    
})


  get email() {
    return this.createupdateCustomerEmailForm.get('email') as FormControl;
  }

  get email2() {
    return this.createupdateCustomerEmailForm.get('email2') as FormControl;
  }
  get id2() {
    return this.createupdateCustomerEmailForm.get('id') as FormControl;
  }



  ngOnInit(): void {
    this.getAllEmail();
    this.getCustomerDetails();
  }




  getAllEmail(){
    this.store.dispatch(new LoadCustomerEmail());
    this.customer_email = this.store.select(getCustomerEmail);
    this.store.select(getCustomerEmail).subscribe(abc =>console.log(abc));
    }

    createupdateCustomerEmail(form: FormGroupDirective){
    if(form.valid){
      const data = this.email_id ? 
        {...form.value, cuid:this.cuid, id: this.email_id}:{...form.value, cuid:this.cuid};
      this.emailService.createupdateCustomerMail(data).subscribe(email =>{
        this.notifyService.showSuccess(email.message);
        this.getCustomerDetails();
        form.resetForm();
      }, error =>{
        this.notifyService.showError(getErrorObj(error).msg);
      });
    }

  }

   getCustomerDetails(){
     this.store.dispatch(new LoadCustomersDetail({uuid:this.cuid}));
     this.store.select(getCustomersDetail).subscribe(cust =>{
       if(cust){
        this.cust_email = cust.email;
       }
     });
    }

   setEmailUpdateFormValue(id: any){
     const selected_email = this.cust_email.find((addr: { ID: any; }) => addr.ID == id)
     if(selected_email){
       this.email.setValue(selected_email.Email);
       this.email2.setValue(selected_email.Email2);
       this.email_id = id;
     }
    }

}
