import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

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
