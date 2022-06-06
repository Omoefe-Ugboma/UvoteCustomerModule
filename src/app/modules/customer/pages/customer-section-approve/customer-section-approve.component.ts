import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCustomerswaitApproval } from 'src/app/core/store/actions/customerWaitApproval.action copy';
import { getCustomerswaitApproval } from 'src/app/core/store/selectors/customerwaitApproval.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer-section-approve',
  templateUrl: './customer-section-approve.component.html',
  styleUrls: ['./customer-section-approve.component.css']
})
export class CustomerSectionApproveComponent implements OnInit {

  FirstName:any;
  loading!: boolean;
  // customers!: Observable<any[]>;
  customers:any = [];
  customerdratnot_loading!: Observable<boolean>;
  selectedCustomer = null;
  editedCustomer = null;
  baseUrl: string = environment.baseApiUrl;

  constructor(private store: Store<AppState>){}

  totalLength: any;
  page:number = 1;

    ngOnInit(): void {
     this.AllCustomers();
    }

    AllCustomers() {
    this.store.dispatch(new LoadCustomerswaitApproval());
    this.customerdratnot_loading = this.store.select(getCustomerswaitApproval);

    this.store.select(getCustomerswaitApproval).subscribe((cust) => {
      if (cust) {
        this.customers = cust;
        this.totalLength = cust.length;
        console.log(['customer in approve '],this.customers);
        // console.log(this.baseUrl+'files/identities/')

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
