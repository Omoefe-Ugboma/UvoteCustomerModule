import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGroupService {

  constructor(private remoteCall: RemoteCallService) { }

  getCustomerGroups() {
    return this.remoteCall.authGet('customers/groups');
  }

  createCustomerGroups(data: any) {
    return this.remoteCall.authPost('customers/groups/add', data);
  }

  updateCustomerGroups(data: any) {
    return this.remoteCall.authPost('customers/groups/update', data);
  }
}
