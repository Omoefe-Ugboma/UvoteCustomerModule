import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-createupdateemail',
  templateUrl: './createupdateemail.component.html',
  styleUrls: ['./createupdateemail.component.css']
})
export class CreateupdateemailComponent implements OnInit, OnChanges {

  @Input() cust_email: any = [];
  @Output() setEmailUpdateValues = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
     
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes.cust_email.currentValue)
    this.cust_email = changes.cust_email.currentValue;  
  }

  emailUpdate(id: any){
    this.setEmailUpdateValues.emit(id);
  }
  

}
