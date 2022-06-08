import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private remoteCall: RemoteCallService) { }

  getCustomerBanks() {
    return this.remoteCall.authGet('customers/bank');
  }

  createupdateBank(data: any) {
    return this.remoteCall.authPost('customers/bank/create-update', data);
  }

  getCustomerBankDetail(data: any) {
    return this.remoteCall.authGet2('customers/bank/show', data);
  }
}
