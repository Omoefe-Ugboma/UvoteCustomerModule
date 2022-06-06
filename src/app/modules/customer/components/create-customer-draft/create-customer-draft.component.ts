import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  LoadAccountOfficers,
  ResetCRUDAccountOfficer,
} from 'src/app/core/store/actions/account-officer.action';
import {
  getAccountOfficers,
  getAccountOfficersLoading,
} from 'src/app/core/store/selectors/account-officer.selector';
import {
  createCustomer,
  createCustomerLoading,
  getCustomerError,
} from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { formatDate } from 'src/app/core/utils/text-utils';
import { NotificationService } from 'src/app/shared/service/notification.service';
import {
  CreateCustomerDraft,
  ResetCRUDCustomer,
} from './../../../../core/store/actions/customer.action';

@Component({
  selector: 'app-create-customer-draft',
  templateUrl: './create-customer-draft.component.html',
  styleUrls: ['./create-customer-draft.component.css'],
})
export class CreateCustomerDraftComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  form: FormGroup;
  result: any;
  loading!: boolean;
  resp: any;
  data: any;
  // step: any = 1;
  file!: File;
  file_1!: File;
  file_2!: File;
  file_3!: File;

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.getAccountOfficers();
    this.creatForm();
  }

  creatForm() {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      middlename: new FormControl('', [Validators.required]),
      date_of_birth: new FormControl('', [Validators.required]),
      nin: new FormControl('', [Validators.required]),
      bvn: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      nationality: new FormControl('', [Validators.required]),
      country_of_origin: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      nok_firstname: new FormControl('', [Validators.required]),
      nok_lastname: new FormControl('', [Validators.required]),
      nok_phone: new FormControl('', [Validators.required]),
      nok_email: new FormControl('', [Validators.required]),
      relationship: new FormControl('', [Validators.required]),
      customer_type: new FormControl('', [Validators.required]),
      officer_id: new FormControl('', [Validators.required]),
      identity_card: [''],
      passport_photo: [''],
      utility_bill: [''],
      signature: [''],
      // identification_type: new FormControl('', [Validators.required]),
      email: this.fb.array([this.emailForm()]),
      phone: this.fb.array([this.phoneForm()]),
      address: this.fb.array([this.addressForm()]),
      bank: this.fb.array([this.banksForm()]),
    });
  }

  get title() {
    return this.form.get('title') as FormControl;
  }

  get firstname() {
    return this.form.get('firstname') as FormControl;
  }

  get lastname() {
    return this.form.get('lastname') as FormControl;
  }

  get middlename() {
    return this.form.get('middlename') as FormControl;
  }

  get date_of_birth() {
    return this.form.get('date_of_birth') as FormControl;
  }

  get nin() {
    return this.form.get('nin') as FormControl;
  }

  get bvn() {
    return this.form.get('bvn') as FormControl;
  }

  get nationality() {
    return this.form.get('nationality') as FormControl;
  }

  get gender() {
    return this.form.get('gender') as FormControl;
  }

  get country_of_origin() {
    return this.form.get('country_of_origin') as FormControl;
  }

  get nok_firstname() {
    return this.form.get('nok_firstname') as FormControl;
  }
  get nok_lastname() {
    return this.form.get('nok_lastname') as FormControl;
  }
  get nok_phone() {
    return this.form.get('nok_phone') as FormControl;
  }

  get nok_email() {
    return this.form.get('nok_email') as FormControl;
  }

  get relationship() {
    return this.form.get('relationship') as FormControl;
  }

  get state() {
    return this.form.get('state') as FormControl;
  }

  get customer_type() {
    return this.form.get('customer_type') as FormControl;
  }

  // get identification() {
  //   return this.form.get('identification') as FormControl;
  // }

  // get identification_type() {
  //   return this.form.get('identification_type') as FormControl;
  // }

  get officer_id() {
    return this.form.get('officer_id') as FormControl;
  }

  get email() {
    return this.form.get('email') as FormArray;
  }

  get phone() {
    return this.form.get('phone') as FormArray;
  }
  get address() {
    return this.form.get('address') as FormArray;
  }
  get bank() {
    return this.form.get('bank') as FormArray;
  }

  emailForm() {
    return this.fb.group({
      email: [null, [Validators.required]],
      default: true,
    });
  }

  phoneForm() {
    return this.fb.group({
      phone: [null, [Validators.required]],
      default: true,
    });
  }

  addressForm() {
    return this.fb.group({
      address1: [null, [Validators.required]],
      address2: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
      default: true,
    });
  }

  banksForm() {
    return this.fb.group({
      bank_name: [null, [Validators.required]],
      account_name: [null, [Validators.required]],
      account_number: [null, [Validators.required]],
      default: true,
    });
  }

  // onChange(event:any){
  //   const file = event.target.files ? event.target.files[0] : '';
  //   console.log(file);
  //   this.form.patchValue({
  //     identification: file
  //   })

  // }

  // onUpload(){
  //   this.loading = !this.loading;
  //   console.log(this.file);
  // }
  onFileSelect(event: any, type: string ) {
    if (event.target.files.length > 0) {
      switch (type) {
        case 'identity_card':
          this.file = event.target.files[0];
          break;
        case 'passport_photo':
          this.file_1 = event.target.files[0];
          break;
        case 'utility_bill':
          this.file_2 = event.target.files[0];
          break;
        case 'signature':
          this.file_3 = event.target.files[0];
          break;
        default:
          break;
      }
    }
  }
  onSave(form: FormGroupDirective) {
    if (this.form.valid) {
    const formData = new FormData();
    const formValues = {...form.value, date_of_birth: formatDate(this.date_of_birth.value, 'yyyy-MM-dd')};
    const formKeys = Object.keys(formValues);

    for (let i = 0; i < formKeys.length; i++) {
      if (formKeys[i] !== 'identity_card' && formKeys[i] !== 'passport_photo' && 
      formKeys[i] !== 'signature' && formKeys[i] !== 'utility_bill') {
        // formData.append(formKeys[i], formValues[formKeys[i]]);
         if (formValues[formKeys[i]] instanceof Array) {
           formData.append(formKeys[i], JSON.stringify(formValues[formKeys[i]]));
          // this.array = JSON.parse(JSON.stringify(data.object));
         } else {
           formData.append(formKeys[i], formValues[formKeys[i]]);
         }
      }
    }
    if(this.file){
      formData.append('identity_card', this.file);
    }
    if(this.file_1){
       formData.append('passport_photo', this.file_1);
    }
    if(this.file_2){
      formData.append('utility_bill', this.file_2);
    }
    if(this.file_3){
      formData.append('signature', this.file_3);
    }

    
    // formData.forEach((value, key) => {console.log(key, value)});
    this.store.dispatch(new CreateCustomerDraft(formData));
    combineLatest(([this.store.select(createCustomerLoading),
      this.store.select(createCustomer),
      this.store.select(getCustomerError)]))
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDCustomer());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          form.resetForm();
          this.store.dispatch(new ResetCRUDCustomer());
        }
      });
    }
  }

  addNewEmails() {
    this.email.push(this.emailForm());
  }
  addNewPhones() {
    this.phone.push(this.phoneForm());
  }
  addNewAddress() {
    this.address.push(this.addressForm());
  }
  addNewBanks() {
    this.bank.push(this.banksForm());
  }
  removeContact(i: Required<number>) {
    this.email.removeAt(i);
  }
  removePhone(i: Required<number>) {
    this.phone.removeAt(i);
  }
  removeAddress(i: Required<number>) {
    this.address.removeAt(i);
  }
  removeBank(i: Required<number>) {
    this.bank.removeAt(i);
  }

  // previous(){
  //   this.step = this.step - 1;
  // }

  getAccountOfficers() {
    this.store.dispatch(new LoadAccountOfficers());
    combineLatest([
      this.store.select(getAccountOfficersLoading),
      this.store.select(getAccountOfficers),
    ]).subscribe(([loading, resp]) => {
      this.loading = loading;
      this.data = resp;
      // console.log("active", this.data)
      if (resp && resp.status === true) {
        this.notifyService.showSuccess(resp.message);
        this.store.dispatch(new ResetCRUDAccountOfficer());
      }
    });
  }
}
