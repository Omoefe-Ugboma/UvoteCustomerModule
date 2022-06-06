import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerdaService {

  constructor(private httpcall: HttpCallsService) { }


  getCustomersWaitApproval() {
    return this.httpcall.authGet('customers?status=draft&is_submitted=1');
  }

}
