import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { CustomerService } from 'src/app/core/service/customer.service';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-customernew',
  templateUrl: './customernew.component.html',
  styleUrls: ['./customernew.component.css']
})
export class CustomernewComponent implements OnInit {

  loading_info!: boolean;
  loading_details!: boolean;
  customer_info!: any;
  customer_details!: any;
  customer_address!: any;
  customer_email!: any;
  customer_phone!: any;
  customer_banks!: any;
  formtype: string = 'new_form';

  public customerForm: FormGroup = new FormGroup({
    customer_info: new FormControl(''),
    customer_address: new FormControl(''),
    customer_email: new FormControl(''),
    customer_phone: new FormControl(''),
    customer_banks: new FormControl(''),
  });

  constructor(
    private customerService: CustomerService,
    private toastr: NotificationService) { }

  ngOnInit(): void {
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
      // this.toastr.showError({ message: error.message, title: 'Error' });
      this.formtype = 'new_form';
      this.loading_info = false;
    });
  }

  getCustomerDetails(uuid: string) {
    this.loading_info = true;
    this.customerService.getCustomerDetails({ uuid }).subscribe(resp => {
      if (resp && resp.status) {
        this.customer_details = resp && resp.data;
        this.customer_address = {address: this.customer_details.address, cuid: uuid};
        this.customer_email = {email: this.customer_details.email, cuid: uuid};
        this.customer_phone = {phone: this.customer_details.phones, cuid: uuid};
        this.customer_banks = {banks: this.customer_details.banks, cuid: uuid};
        // this.customer_nextofkins = {nextofkins: this.customer_details.next_of_kins, cuid: uuid}
        this.formtype = 'update_form';
        this.loading_info = false;
      }
    }, error => {
      this.toastr.showError(error.message);
      this.formtype = 'new_form';
      this.loading_info = false;
    });
  }

  onSubmit(event: Event) {
    console.log(this.customerForm);
  }

}
