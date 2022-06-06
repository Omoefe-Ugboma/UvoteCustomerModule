import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators } from '@angular/forms';
import { AccountOfficers, CustomerInfo } from 'src/app/core/schema/customer.schema';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerInfoComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomerInfoComponent),
      multi: true
    }
  ]
})
export class CustomerInfoComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {

  @Input() accountofficers: AccountOfficers[] = []
  @Input() customer_info!: CustomerInfo;
  @Output() customerInfoFormSubmitter = new EventEmitter();
  officers_select: any;

  public customerInfoForm = new FormGroup({
    uuid: new FormControl(''),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    date_of_birth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    customer_type: new FormControl('', [Validators.required]),
    customer_number: new FormControl('', [Validators.required]),
    officer_id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
  });

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.customerInfoForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.customerInfoForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.customerInfoForm.disable() : this.customerInfoForm.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.customerInfoForm.valid ? null : {
      valid: false,
      message: 'Customer info fields are invalid'
    };
  }

  get uuid() {
    return this.customerInfoForm.get('uuid') as FormControl;
  }

  get firstname() {
    return this.customerInfoForm.get('firstname') as FormControl;
  }

  get lastname() {
    return this.customerInfoForm.get('lastname') as FormControl;
  }

  get date_of_birth() {
    return this.customerInfoForm.get('date_of_birth') as FormControl;
  }

  get gender() {
    return this.customerInfoForm.get('gender') as FormControl;
  }

  get country() {
    return this.customerInfoForm.get('country') as FormControl;
  }

  get state() {
    return this.customerInfoForm.get('state') as FormControl;
  }

  get customer_type() {
    return this.customerInfoForm.get('customer_type') as FormControl;
  }

  get customer_number() {
    return this.customerInfoForm.get('customer_number') as FormControl;
  }

  get officer_id() {
    return this.customerInfoForm.get('officer_id') as FormControl;
  }

  get title() {
    return this.customerInfoForm.get('title') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customer_info = changes.customer_info && changes.customer_info.currentValue;

    if (changes.accountofficers) {
      this.accountofficers = changes.accountofficers.currentValue;
    }

    if (this.customer_info) {
      this.setFormValues();
    }
  }

  setFormValues() {
    this.uuid.setValue(this.customer_info.CUID);
    this.firstname.setValue(this.customer_info.FirstName);
    this.lastname.setValue(this.customer_info.LastName);
    this.date_of_birth.setValue(this.customer_info.DateOfBirth);
    this.gender.setValue(this.customer_info.Gender);
    this.country.setValue(this.customer_info.Country);
    this.state.setValue(this.customer_info.State);
    this.customer_type.setValue(this.customer_info.CustomerType);
    this.customer_number.setValue(this.customer_info.CustomerNumber);
    this.officer_id.setValue(this.customer_info.AccountOfficerID);
    this.title.setValue(this.customer_info.Title);
  }

}
