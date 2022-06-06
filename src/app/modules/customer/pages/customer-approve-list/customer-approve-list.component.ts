import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCustomers } from 'src/app/core/store/actions/customer.action';
import {
  getCustomers,
  getCustomersLoading,
} from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-customer-approve-list',
  templateUrl: './customer-approve-list.component.html',
  styleUrls: ['./customer-approve-list.component.css'],
})
export class CustomerApproveListComponent implements OnInit {
  FirstName: any;
  loading!: boolean;
  // customers!: Observable<any[]>;
  customers: any = [];
  customers_loading!: Observable<boolean>;
  selectedCustomer = null;
  editedCustomer = null;

  constructor(private store: Store<AppState>) {}

  totalLength: any;
  page: number = 1;

  // constructor(private productService: CustomerService) {
  //   this.productService.getCustomers()
  //   .subscribe((products: any) => {
  //        this.customers = products.data;
  //       console.log(this.customers = products)
  //     });
  // }

  ngOnInit(): void {
    console.log("AAAA");
    this.AllCustomers();
  }

  AllCustomers() {
    this.store.dispatch(new LoadCustomers());
    this.customers_loading = this.store.select(getCustomersLoading);

    this.store.select(getCustomers).subscribe((cust) => {
      if (cust) {
        cust.map((customer: any) => {
          console.log(customer);
          return customer;
        });
        this.customers = cust;
        this.totalLength = cust.length;
        console.log(this.customers);
      }
    });
  }

  selectCustomer(cust: any) {
    this.selectedCustomer = cust;
    // console.log(this.selectedCustomer)
  }

  editCustomer(cust: any) {
    this.editedCustomer = cust;
    console.log(this.editedCustomer);
  }

  search() {
    if (this.FirstName == '') {
      this.AllCustomers();
    } else {
      this.customers = this.customers.filter((res: { FirstName: string }) => {
        return res.FirstName.toLocaleLowerCase().match(
          this.FirstName.toLocaleLowerCase()
        );
      });
    }
  }
}
