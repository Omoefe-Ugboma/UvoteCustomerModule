import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class AccountOfficerService {
  
  constructor(private remoteCall: RemoteCallService) { }

  getAccountOfficers() {
    return this.remoteCall.authGet('account-officers');
  }

}
