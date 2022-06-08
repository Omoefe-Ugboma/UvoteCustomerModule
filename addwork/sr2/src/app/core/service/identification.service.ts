import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

  constructor(private remoteCall: RemoteCallService) { }

  getCustomerIdentification() {
    return this.remoteCall.authGet('customers/identification/');
  }

  createupdateCustomerIdentification(data: any) {
    return this.remoteCall.authPost('customers/identification/create-update', data);
  }

  getCustomerIdentificationDetail(data: any) {
    return this.remoteCall.authGet2('customers/identification/show', data);
  }
}
