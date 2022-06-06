import { FormGroupDirective } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import { CustomerService } from 'src/app/core/service/customer.service';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { LoadAccountOfficers } from 'src/app/core/store/actions/customer.action';
import { getAccountOfficers } from 'src/app/core/store/selectors/customer.selector';
import { CustomerInfoComponent } from '../../components/customer-info/customer-info.component';
import { CustomerAddressComponent } from '../../components/customer-address/customer-address.component';
import { CustomerEmailComponent } from '../../components/customer-email/customer-email.component';
import { CustomerPhoneComponent } from '../../components/customer-phone/customer-phone.component';
import { CustomerNextofkinsComponent } from '../../components/customer-nextofkins/customer-nextofkins.component';
import { CustomerBanksComponent } from '../../components/customer-banks/customer-banks.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @ViewChild(CustomerInfoComponent) customerinfoComponent!: CustomerInfoComponent;
  @ViewChild(CustomerAddressComponent) customeraddressComponent!: CustomerAddressComponent;
  @ViewChild(CustomerEmailComponent) customeremailComponent!: CustomerEmailComponent;
  @ViewChild(CustomerPhoneComponent) customerphoneComponent!: CustomerPhoneComponent;
  @ViewChild(CustomerNextofkinsComponent) customernextofkinsComponent!: CustomerNextofkinsComponent;
  @ViewChild(CustomerBanksComponent) customerbanksComponent!: CustomerBanksComponent;

  loading_info!: boolean;
  loading_details!: boolean;
  customer_info!: any;
  customer_details!: any;
  customer_address!: any;
  customer_email!: any;
  customer_phone!: any;
  customer_nextofkins!: any;
  customer_banks!: any;
  accountofficers: any;
  formtype: string = 'new_form';
  allforms: any[] = [];

  constructor(
    private customerService: CustomerService,
    private toastr: NotificationService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getAccountOfficers();
  }

  searchFormSubmit(form: FormGroupDirective) {
    if (form.valid) {
      this.getCustomerBasicInfo(form.value.search);
      this.getCustomerDetails(form.value.search);
      form.resetForm();
    }
  }

  getCustomerBasicInfo(uuid: string) {
    this.loading_info = true;
    this.customerService.getCustomerBasicInfo({ uuid }).subscribe(resp => {
      if (resp && resp.status) {
        this.customer_info = resp && resp.data;
        this.formtype = 'update_form';
        this.loading_info = false;
      }
    }, error => {
      this.toastr.showError(error.message);
      this.formtype = 'new_form';
      this.loading_info = false;
    });
  }

  getCustomerDetails(uuid: string) {
    this.loading_info = true;
    this.customerService.getCustomerDetails({ uuid }).subscribe(resp => {
      if (resp && resp.status) {
        this.customer_details = resp && resp.data;
        this.customer_address = {address: this.customer_details.address, cuid: uuid}
        this.customer_email = {email: this.customer_details.email, cuid: uuid}
        this.customer_phone = {phone: this.customer_details.phones, cuid: uuid}
        this.customer_nextofkins = {nextofkins: this.customer_details.next_of_kins, cuid: uuid}
        this.customer_banks = {banks: this.customer_details.banks, cuid: uuid}
        this.formtype = 'update_form';
        this.loading_info = false;
      }
    }, error => {
      this.toastr.showError(error.message);
      this.formtype = 'new_form';
      this.loading_info = false;
    });
  }

  getAccountOfficers() {
    this.store.dispatch(new LoadAccountOfficers());
    this.store.select(getAccountOfficers)
      .subscribe(officers => this.accountofficers = officers);
  }

  onSubmit(event: Event) {
    // this.customerinfoComponent.clickSubmitButton()
    // this.customeraddressComponent.clickSubmitButton()
    // this.customeremailComponent.clickSubmitButton()
    // this.customerphoneComponent.clickSubmitButton()
    this.customernextofkinsComponent.clickSubmitButton()
    // this.customerbanksComponent.clickSubmitButton()
  }

  getAllForms(forms: any) {
    this.allforms.push(forms);
  }

}
