import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-phone',
  templateUrl: './customer-phone.component.html',
  styleUrls: ['./customer-phone.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerPhoneComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomerPhoneComponent),
      multi: true
    }
  ]
})
export class CustomerPhoneComponent implements OnInit, OnChanges {
  @Input() customer_phone: any;

  customerPhoneForm = new FormGroup({
    id: new FormControl(''),
    cuid: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    phone2: new FormControl('', [Validators.required]),
  });

  get id() {
    return this.customerPhoneForm.get('id') as FormControl;
  }

  get cuid() {
    return this.customerPhoneForm.get('cuid') as FormControl;
  }

  get phone() {
    return this.customerPhoneForm.get('phone') as FormControl;
  }

  get phone2() {
    return this.customerPhoneForm.get('phone2') as FormControl;
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.customerPhoneForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.customerPhoneForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.customerPhoneForm.disable() : this.customerPhoneForm.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.customerPhoneForm.valid ? null : {
      valid: false,
      message: 'Customer info fields are invalid'
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customer_phone =
      changes.customer_phone && changes.customer_phone.currentValue;

      if (this.customer_phone) {
        this.setFormValues();
      }
  }

  setFormValues() {
    this.cuid.setValue(this.customer_phone.cuid);
    this.phone.setValue(this.customer_phone.phone[0].Phone2);
    this.phone2.setValue(this.customer_phone.phone[0].Tel);
    this.id.setValue(this.customer_phone.phone.ID);
  }

}
