import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCustomers } from 'src/app/core/store/actions/customer.action';
import { LoadCustomersInDraftNotSub } from 'src/app/core/store/actions/customerdraftnot.action';
// import { LoadCustomersInDraftNotSub } from 'src/app/core/store/actions/customer.action';
import { getCustomers } from 'src/app/core/store/selectors/customer.selector';
import { getCustomersdraftnot } from 'src/app/core/store/selectors/customerdraftnot.selector';
import { AppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-customer-section-draft',
  templateUrl: './customer-section-draft.component.html',
  styleUrls: ['./customer-section-draft.component.css']
})
export class CustomerSectionDraftComponent implements OnInit {

  FirstName:any;
  loading!: boolean;
  // customers!: Observable<any[]>;
  customers:any = [];
  customerdratnot_loading!: Observable<boolean>;
  selectedCustomer = null;
  editedCustomer = null;

  constructor(private store: Store<AppState>){}

  totalLength: any;
  page:number = 1;

    ngOnInit(): void {
     this.AllCustomers();
    }

    AllCustomers() {
    this.store.dispatch(new LoadCustomersInDraftNotSub());
    this.customerdratnot_loading = this.store.select(getCustomersdraftnot);

    this.store.select(getCustomersdraftnot).subscribe((cust) => {
      if (cust) {
        this.customers = cust;
        this.totalLength = cust.length;
        console.log(['customer in draft '],this.customers);
      }
    });
  }

  selectCustomer(cust:any){
    this.selectedCustomer = cust;
    // console.log(this.selectedCustomer)
  }

  editCustomer(cust:any){
    this.editedCustomer = cust;
    console.log(this.editedCustomer)
  }
 
  search(){
    if(this.FirstName == ""){
      this.AllCustomers();
    }else{
      this.customers = this.customers.filter((res: { FirstName: string; }) =>{
        return res.FirstName.toLocaleLowerCase().match(this.FirstName.toLocaleLowerCase());
      })
    }
  }

}
