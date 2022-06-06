import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-nextofkins',
  templateUrl: './customer-nextofkins.component.html',
  styleUrls: ['./customer-nextofkins.component.css']
})
export class CustomerNextofkinsComponent implements OnInit, OnChanges {
  @Input() customer_nextofkins!: any;
  @Output() customerNextofkinsFormSubmitter = new EventEmitter();

  customerNextofkinsForm = new FormGroup({
    id: new FormControl(''),
    cuid: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    relationship: new FormControl('', [Validators.required]),
  }); 

  get id() {
    return this.customerNextofkinsForm.get('id') as FormControl;
  }

  get cuid() {
    return this.customerNextofkinsForm.get('cuid') as FormControl;
  }

  get name() {
    return this.customerNextofkinsForm.get('name') as FormControl;
  }

  get email() {
    return this.customerNextofkinsForm.get('email') as FormControl;
  }

  get phone() {
    return this.customerNextofkinsForm.get('phone') as FormControl;
  }
  get relationship() {
    return this.customerNextofkinsForm.get('relationship') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.customer_nextofkins =
      changes.customer_nextofkins && changes.customer_nextofkins.currentValue;
      
      if (this.customer_nextofkins) {
        this.setFormValues();
      }
  }

  onSubmit(form: FormGroupDirective) {
    if (form.valid) {
      // console.log(form.value);
      this.customerNextofkinsFormSubmitter.emit(form);
    }
  }

  setFormValues() {
    console.log(this.customer_nextofkins);
    this.cuid.setValue(this.customer_nextofkins.cuid);
    this.name.setValue(this.customer_nextofkins.nextofkins[0].NextOfKinName);
    this.email.setValue(this.customer_nextofkins.nextofkins[0].EmailAddress);
    this.phone.setValue(this.customer_nextofkins.nextofkins[0].Tel);
    this.relationship.setValue(this.customer_nextofkins.nextofkins[0].Relationship);
    this.id.setValue(this.customer_nextofkins.nextofkins.ID);
  }

  clickSubmitButton() {
    const element: HTMLElement = document.getElementById('customer_nextofkins_button') as HTMLElement;
    element.click();
  }

}
