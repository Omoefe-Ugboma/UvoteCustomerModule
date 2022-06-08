import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { LoadAccountOfficers, ResetCRUDAccountOfficer } from 'src/app/core/store/actions/account-officer.action';
import { getAccountOfficers, getAccountOfficersLoading, getAccountOfficerError } from 'src/app/core/store/selectors/account-officer.selector';
import {createCustomer, createCustomerLoading, getCustomerError} from 'src/app/core/store/selectors/customer.selector'
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { CreateCustomer , ResetCRUDCustomer} from 'src/app/core/store/actions/customer.action';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  loading!: boolean;
  resp: any;
  data: any
 

  isEnabled!: boolean;

  createCustomerForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    customer_type: new FormControl('', [Validators.required]),
    customer_number: new FormControl('', [Validators.required]),
    officer_id: new FormControl('', [Validators.required]),
  });

  

  constructor(private store: Store<AppState>, 
    private notifyService: NotificationService, 
    private activatedRoute: ActivatedRoute) {
 
  }

  ngOnInit(): void {
    this.getAccountOfficers();
  }

  get title() {
    return this.createCustomerForm.get('title') as FormControl;
  }

  get firstname() {
    return this.createCustomerForm.get('firstname') as FormControl;
  }

  get lastname() {
    return this.createCustomerForm.get('lastname') as FormControl;
  }
  get date_of_birth() {
    return this.createCustomerForm.get('date_of_birth') as FormControl;
  }
   get gender() {
    return this.createCustomerForm.get('gender') as FormControl;
  }

  get country() {
    return this.createCustomerForm.get('country') as FormControl;
  }
  get state() {
    return this.createCustomerForm.get('state') as FormControl;
  }
  get customer_type() {
    return this.createCustomerForm.get('customer_type') as FormControl;
  }
  get customer_number() {
    return this.createCustomerForm.get('customer_number') as FormControl;
  }
  get officer_id() {
    return this.createCustomerForm.get('officer_id') as FormControl;
  }
  
  createCustomer(form: FormGroupDirective) {
    if (this.createCustomerForm.valid) {
      this.store.dispatch(new CreateCustomer(this.createCustomerForm.value));
      combineLatest(([this.store.select(createCustomerLoading), this.store.select(createCustomer), this.store.select(getCustomerError)]))
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


  getAccountOfficers() {
      this.store.dispatch(new LoadAccountOfficers());
      combineLatest(([this.store.select(getAccountOfficersLoading), this.store.select(getAccountOfficers)]))
        .subscribe(([loading, resp]) => {
          this.loading = loading;
          this.data = resp
          if (resp && resp.status === true) {
            
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDAccountOfficer());
          }
        });
  }
}