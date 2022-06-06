import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-list-submitted',
  templateUrl: './customer-list-submitted.component.html',
  styleUrls: ['./customer-list-submitted.component.css']
})
export class CustomerListSubmittedComponent implements OnInit {

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
