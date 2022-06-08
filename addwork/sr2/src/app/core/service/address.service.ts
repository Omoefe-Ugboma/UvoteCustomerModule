import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private remoteCall: RemoteCallService) { }

  getCustomerAddress() {
    return this.remoteCall.authGet('customers/address/');
  }

  createupdateCustomerAddress(data: any) {
    return this.remoteCall.authPost('customers/address/create-update', data);
  }

  getCustomerAddressDetail(data: any) {
    return this.remoteCall.authGet2('customers/address/show', data);
  }
} 
