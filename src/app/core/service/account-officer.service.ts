import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class AccountOfficerService {
  
  constructor(private httpcall:  HttpCallsService) { }

  getAccountOfficers() {
    return this.httpcall.authGet('account-officers');
  }

}
