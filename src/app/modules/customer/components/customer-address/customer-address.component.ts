import { Component, Input, OnInit, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators, } from '@angular/forms';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerAddressComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomerAddressComponent),
      multi: true
    }
  ]
})
export class CustomerAddressComponent implements OnInit, OnChanges {
  @Input() customer_address!: any;

  customerAddressForm = new FormGroup({
    id: new FormControl(''),
    cuid: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
  });

  get id() {
    return this.customerAddressForm.get('id') as FormControl;
  }

  get cuid() {
    return this.customerAddressForm.get('cuid') as FormControl;
  }

  get address() {
    return this.customerAddressForm.get('address') as FormControl;
  }

  get address2() {
    return this.customerAddressForm.get('address2') as FormControl;
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.customerAddressForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.customerAddressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.customerAddressForm.disable() : this.customerAddressForm.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.customerAddressForm.valid ? null : {
      valid: false,
      message: 'Customer info fields are invalid'
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customer_address =
      changes.customer_address && changes.customer_address.currentValue;

    if (this.customer_address) {
      this.setFormValues();
    }
  }

  setFormValues() {
    this.cuid.setValue(this.customer_address.cuid);
    this.address.setValue(this.customer_address.address[0].Address);
    this.address2.setValue(this.customer_address.address[0].Address2);
    this.id.setValue(this.customer_address.address.ID);
  }

}
