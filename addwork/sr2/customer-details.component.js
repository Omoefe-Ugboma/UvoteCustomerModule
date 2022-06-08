import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomerService } from 'src/app/core/service/customer.service';
import { LoadCustomers } from 'src/app/core/store/actions/customer.action';
// import { getCustomerByUUID } from 'src/app/core/store/selectors/customer.selector';
import { getCustomerByCustomerID } from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  test = ['omoefe','ugboma','Joseph']
  loading!: boolean;
  customer_id: any;
  bankname:any;
  customer: any;
  title!: string; 
  firstname!: string;
  lastname!: string;
  date_of_birth!: string;
  gender!: string;
  country!: string;
  state!: string;
  customer_type!: string;
  customer_number!: string;
  officer_id!: string;
  account_status!: string;
  datecreated!: string;


  constructor(
    private store: Store<AppState>, 
    private activatedRoute: ActivatedRoute,
    ) {
    this.customer_id = this.activatedRoute.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.showCustomer();
  }

  showCustomer() {
    this.store.dispatch(new LoadCustomers());
    this.store.select(getCustomerByCustomerID(this.customer_id)).subscribe(customer => {
      this.loading = false;
      if(customer){
        this.title = customer.Title
        this.firstname = customer.FirstName
        this.lastname = customer.LastName
        this.date_of_birth = customer.DateOfBirth
        this.gender = customer.Gender
        this.country = customer.Country
        this.state = customer.State
        this.datecreated = customer.DateCreated
        this.customer_type = customer.CustomerType
        this.customer_number = customer.CustomerNumber
        this.officer_id = customer.OfficerID
        this.account_status = (customer.Status == 0) ? 'inactive' : 'active'
      }
    });
  }
}
