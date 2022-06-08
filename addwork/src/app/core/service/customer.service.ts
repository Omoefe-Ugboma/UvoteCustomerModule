import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private remoteCall: RemoteCallService) { }

  getCustomers() {
    return this.remoteCall.authGet('customers');
  }

  createCustomer(data: any) {
    return this.remoteCall.authPost('customers/create', data);
  }

  createUpdateCustomer(data: any) {
    return this.remoteCall.authPost('customers/create-update', data);
  }

  updateCustomer(data: any) {
    return this.remoteCall.authPost('customers/update', data);
  }

  // getCustomerGroups(data: any) {
  //   return this.remoteCall.authGet2('customers/show-menu-group', data);
  // }

  createCustomerGroup(data: any) {
    return this.remoteCall.authPost('customers/groups/add', data);
  }

  deleteCustomerGroup(data: any) {
    return this.remoteCall.authPost('customers/groups/remove', data);
  }

  getCustomersGroups(data: any) {
    return this.remoteCall.authGet2('customers/groups/show-customer-groups', data);
  }


  deleteCustomers(data: any) {
    return this.remoteCall.authPost('customers/remove', data);
  }

  
  getCustomerDetails(data: any) {
    return this.remoteCall.authPost('customers/customer-detail', data);
  }

  
  getCustomer(data: any) {
    return this.remoteCall.authGet2('customers/show', data);
  }

}
