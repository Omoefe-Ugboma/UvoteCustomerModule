import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadCustomerBanks } from 'src/app/core/store/actions/bank.action';
import { AppState } from 'src/app/core/store/state/app.state';
import { getCustomerBanks } from './../../../../core/store/selectors/bank.selector';

@Component({
  selector: 'app-customer-banks',
  templateUrl: './customer-banks.component.html',
  styleUrls: ['./customer-banks.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerBanksComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomerBanksComponent),
      multi: true
    }
  ]
})
export class CustomerBanksComponent implements OnInit, OnChanges {
  @Input() customer_banks!: any;
  customer_banks_loading!: boolean;
  loading!: boolean;




  customerBankForm = new FormGroup({
    id: new FormControl(''),
    cuid: new FormControl('', [Validators.required]),
    bank_name: new FormControl('', [Validators.required]),
    account_number: new FormControl('', [Validators.required]),
  });

  get id() {
    return this.customerBankForm.get('id') as FormControl;
  }

  get cuid() {
    return this.customerBankForm.get('cuid') as FormControl;
  }

  get bank_name() {
    return this.customerBankForm.get('bank_name') as FormControl;
  }

  get account_number() {
    return this.customerBankForm.get('account_number') as FormControl;
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.customerBankForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.customerBankForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.customerBankForm.disable() : this.customerBankForm.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.customerBankForm.valid ? null : {
      valid: false,
      message: 'Customer info fields are invalid'
    };
  }

  constructor(private store: Store<AppState>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerBankForm = this.fb.group({
      processBankDetails: this.fb.array([])
    });

    this.getAllBanks()
  }

  addProcessOrder() {
    (<FormArray>this.customerBankForm.get('processBankDetails')).push(this.fb.group({
      bank_name: [],
      account_number: [],
      id: this.id
    }));
  }

  get processBankDetails() {
    return (<FormArray>this.customerBankForm.get('processBankDetails')).controls;
  }

  removeProcessBankField(i: number) {
    (<FormArray>this.customerBankForm.get('processBankDetails')).removeAt(i);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customer_banks =
      changes.customer_banks && changes.customer_banks.currentValue;
    if (this.customer_banks > 1) {
      this.setFormValues();
    }
  }

  getAllBanks() {
    this.store.dispatch(new LoadCustomerBanks());
    this.customer_banks = this.store.select(getCustomerBanks);
    this.store.select(getCustomerBanks).subscribe(banks => {
    })
  }

  setFormValues() {
    this.cuid.setValue(this.customer_banks.cuid);
    this.bank_name.setValue(this.customer_banks.banks[0].BankName);
    this.account_number.setValue(this.customer_banks.banks[0].AccountNumber);
    this.id.setValue(this.customer_banks.banks.ID);
  }

}
