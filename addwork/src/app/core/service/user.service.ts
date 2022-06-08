import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private remoteCall: RemoteCallService) { }

  getUsers() {
    return this.remoteCall.authGet('users');
  }

  createUser(data: any) {
    return this.remoteCall.authPost('users/create', data);
  }

  disableUser(data: any) {
    return this.remoteCall.authPost('users/disable', data);
  }

  enableUser(data: any) {
    return this.remoteCall.authPost('users/enable', data);
  }

  updateUser(data: any) {
    return this.remoteCall.authPost('users/update', data);
  }

  resetUserPassword(data: any) {
    return this.remoteCall.authPost('users/password/reset', data);
  }

  getUserGroups(data: any) {
    return this.remoteCall.authGet2('users/groups/show-user-groups', data);
  }

  createUserGroup(data: any) {
    return this.remoteCall.authPost('users/groups/add', data);
  }

  deleteUserGroup(data: any) {
    return this.remoteCall.authPost('users/groups/remove', data);
  }
}
