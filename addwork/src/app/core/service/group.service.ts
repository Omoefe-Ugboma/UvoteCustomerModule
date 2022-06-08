import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private remoteCall: RemoteCallService) { }

  getGroups() {
    return this.remoteCall.authGet('groups');
  }

  createGroup(data: any) {
    return this.remoteCall.authPost('groups/add', data);
  }

  updateGroup(data: any) {
    return this.remoteCall.authPost('groups/update', data);
  }
}
