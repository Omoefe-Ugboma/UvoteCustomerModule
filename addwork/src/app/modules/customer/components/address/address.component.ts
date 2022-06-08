import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit, OnChanges {
  @Input() cust_address: any = [];
  @Output() setAddressUpdateValues = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    // console.log(this.cust_address)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.cust_address.currentValue)
    this.cust_address = changes.cust_address.currentValue;  
  }

  addressUpdate(id: any){
    // console.log(id);
    this.setAddressUpdateValues.emit(id);
  }

}
