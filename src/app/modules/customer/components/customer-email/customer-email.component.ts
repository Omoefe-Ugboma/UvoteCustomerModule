import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-email',
  templateUrl: './customer-email.component.html',
  styleUrls: ['./customer-email.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomerEmailComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomerEmailComponent),
      multi: true
    }
  ]
})
export class CustomerEmailComponent implements OnInit,  OnChanges {
  @Input() customer_email!: any;

  customerEmailForm = new FormGroup({
    id: new FormControl(''),
    cuid: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    email2: new FormControl('', [Validators.required]),
  });

  get id() {
    return this.customerEmailForm.get('id') as FormControl;
  }

  get cuid() {
    return this.customerEmailForm.get('cuid') as FormControl;
  }

  get email() {
    return this.customerEmailForm.get('email') as FormControl;
  }

  get email2() {
    return this.customerEmailForm.get('email2') as FormControl;
  }

  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.customerEmailForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.customerEmailForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.customerEmailForm.disable() : this.customerEmailForm.enable();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.customerEmailForm.valid ? null : {
      valid: false,
      message: 'Invalid customer email fields'
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customer_email =
      changes.customer_email && changes.customer_email.currentValue;

      if (this.customer_email) {
        this.setFormValues();
      }
  }

  setFormValues() {
    this.cuid.setValue(this.customer_email.cuid);
    this.email.setValue(this.customer_email.email[0].Email);
    this.email2.setValue(this.customer_email.email[0].Email2);
    this.id.setValue(this.customer_email.email.ID);
  }

}
