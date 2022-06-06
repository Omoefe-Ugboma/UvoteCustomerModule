import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpcall: HttpCallsService) { }

  getCustomers() {
    return this.httpcall.authGet('customers?status=approved');
    // return this.httpcall.authGet('customers?status=approved');
  }

  // getCustomerTest(page: number) {
  //   return this.httpcall.authGet('customers?status=approved&page='+page);
  //   // return this.httpcall.authGet('customers?status=approved');
  // }

  // getCustomersSubmittedForApproval() {
  //   return this.httpcall.authGet('customers?status=draft');
  //   // return this.httpcall.authGet('customers?status=approved');
  // }





  createCustomerDraft(data: any) {
    return this.httpcall.authPostUploads('customers/create-update', data);
  }
  approveCustomer(data: any) {
    return this.httpcall.authPost('customers/approve', data);
  }

  submitCustomer(data: any) {
    return this.httpcall.authPost('customers/submit', data);
  }

  getCustomerBasicInfo(data: any) {
    return this.httpcall.authGet2('customers/show', data);
  }

  getCustomerDetails(data: any) {
    return this.httpcall.authPost('customers/customer-detail', data);
  }

  getAccountOfficers() {
    return this.httpcall.authGet('account-officers');
  }
  
  // New customer module
  updateCustomer(data: any) {
    return this.httpcall.authPostUploads('customers/create-update', data);
  }

}
