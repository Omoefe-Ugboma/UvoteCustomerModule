import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private remoteCall: RemoteCallService) { }

  getCustomerMail() {
    return this.remoteCall.authGet('customers/mail');
  }

  createupdateCustomerMail(data: any) {
    return this.remoteCall.authPost('customers/email/create-update', data);
  }

  getCustomerEmailDetail(data: any) {
    return this.remoteCall.authGet2('customers/email/show', data);
  }
} 
 