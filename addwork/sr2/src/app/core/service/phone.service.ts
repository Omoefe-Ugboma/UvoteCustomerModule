import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private remoteCall: RemoteCallService) { }

  getCustomerPhone() {
    return this.remoteCall.authGet('customers/phone/');
  }

  createupdateCustomerPhone(data: any) {
    return this.remoteCall.authPost('customers/phone/create-update', data);
  }

  getCustomerPhoneDetail(data: any) {
    return this.remoteCall.authGet2('customers/phone/show', data);
  }
}
