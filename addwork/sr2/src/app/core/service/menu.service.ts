import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private remoteCall: RemoteCallService) { }

  getMenus() {
    return this.remoteCall.authGet('menus');
  }

  createMenu(data: any) {
    return this.remoteCall.authPost('menus/create', data);
  }

  updateMenu(data: any) {
    return this.remoteCall.authPost('menus/update', data);
  }

  getMenuGroups(data: any) {
    return this.remoteCall.authGet2('menus/show-menu-group', data);
  }

  createMenuGroup(data: any) {
    return this.remoteCall.authPost('menus/groups/add', data);
  }

  deleteMenuGroup(data: any) {
    return this.remoteCall.authPost('menus/groups/remove', data);
  }

  deleteMenus(data: any) {
    return this.remoteCall.authPost('menus/remove', data);
  }
}
