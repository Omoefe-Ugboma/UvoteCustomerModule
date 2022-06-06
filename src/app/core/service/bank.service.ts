import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private httpcall: HttpCallsService) { }

  getCustomerBanks() {
    return this.httpcall.authGet('customers/bank');
  }

  createupdateBank(data: any) {
    return this.httpcall.authPost('customers/bank/create-update', data);
  }

  getCustomerBankDetail(data: any) {
    return this.httpcall.authGet2('customers/bank/show', data);
  }
}
