import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.css']
})
export class CustomerdataComponent implements OnInit {
  showEditedCustomer = false;
  @Input() item = '';
  @Input() customers!:any;
  
  @Output() editedCustomer= new EventEmitter<any>();

  public selectedCustomer: any;

  constructor(){}

  ngOnInit(): void {
    // this.onUpdateCustomer();
  }

  editCustomer(cust: any){
   this.showEditedCustomer = true;
   this.selectedCustomer = cust;
  }


}