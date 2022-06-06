import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit, OnChanges {

  @Output() submit = new EventEmitter();
  @Input() loading!: boolean;

  searchCustomerForm = new FormGroup({
    search: new FormControl('', [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get search() {
    return this.searchCustomerForm.get('search') as FormControl;
  }

  searchForm(form: FormGroupDirective) {
    this.submit.emit(form);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = changes.loading.currentValue;
  }

}
