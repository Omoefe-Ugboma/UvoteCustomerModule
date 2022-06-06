import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCustomers} from 'src/app/core/store/actions/customer.action';
import { getCustomers, getCustomersLoading } from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-customer-submit-list',
  templateUrl: './customer-submit-list.component.html',
  styleUrls: ['./customer-submit-list.component.css']
})
export class CustomerSubmitListComponent implements OnInit {

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


  // constructor(private productService: CustomerService) {
  //   this.productService.getCustomers()
  //   .subscribe((products: any) => {
  //        this.customers = products.data;
  //       console.log(this.customers = products)
  //     });
  // }

    ngOnInit(): void {
     this.AllCustomers();
    }

    AllCustomers() {
    this.store.dispatch(new LoadCustomers());
    this.customerdratnot_loading = this.store.select(getCustomers);

    this.store.select(getCustomers).subscribe((cust) => {
      if (cust) {
        this.customers = cust;
        this.totalLength = cust.length;
        console.log(this.customers);
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
