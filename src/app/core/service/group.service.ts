import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpcall: HttpCallsService) { }

  getGroups() {
    return this.httpcall.authGet('groups');
  }

  createGroup(data: any) {
    return this.httpcall.authPost('groups/add', data);
  }

  updateGroup(data: any) {
    return this.httpcall.authPost('groups/update', data);
  }
}
