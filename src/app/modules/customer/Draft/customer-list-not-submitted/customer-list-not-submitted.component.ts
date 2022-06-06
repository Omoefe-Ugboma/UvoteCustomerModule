import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list-not-submitted',
  templateUrl: './customer-list-not-submitted.component.html',
  styleUrls: ['./customer-list-not-submitted.component.css']
})
export class CustomerListNotSubmittedComponent implements OnInit {

  @Input() customers:any;
  @Input() totalLength: any;
  @Input() page!:number;

  @Output() selectcustomer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  customerClick(cust:any){
    this.selectcustomer.emit(cust);
  }

}
