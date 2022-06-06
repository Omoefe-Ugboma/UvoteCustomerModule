import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpcall: HttpCallsService) { }

  getUsers() {
    return this.httpcall.authGet('users');
  }

  getUserAccessMenus() {
    return this.httpcall.authGet('user/access');
  }

  createUser(data: any) {
    return this.httpcall.authPost('users/create', data);
  }

  disableUser(data: any) {
    return this.httpcall.authPost('users/disable', data);
  }

  enableUser(data: any) {
    return this.httpcall.authPost('users/enable', data);
  }

  updateUser(data: any) {
    return this.httpcall.authPost('users/update', data);
  }

  resetUserPassword(data: any) {
    return this.httpcall.authPost('users/password/reset', data);
  }

  getUserGroups(data: any) {
    return this.httpcall.authGet2('users/groups/show-user-groups', data);
  }

  createUserGroup(data: any) {
    return this.httpcall.authPost('users/groups/add', data);
  }

  deleteUserGroup(data: any) {
    return this.httpcall.authPost('users/groups/remove', data);
  }
}
