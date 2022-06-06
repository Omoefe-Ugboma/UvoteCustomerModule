import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpcall: HttpCallsService) { }

  getMenus() {
    return this.httpcall.authGet('menus');
  }

  createMenu(data: any) {
    return this.httpcall.authPost('menus/create', data);
  }

  updateMenu(data: any) {
    return this.httpcall.authPost('menus/update', data);
  }

  getMenuGroups(data: any) {
    return this.httpcall.authGet2('menus/show-menu-group', data);
  }

  createMenuGroup(data: any) {
    return this.httpcall.authPost('menus/groups/add', data);
  }

  deleteMenuGroup(data: any) {
    return this.httpcall.authPost('menus/groups/remove', data);
  }

  deleteMenus(data: any) {
    return this.httpcall.authPost('menus/remove', data);
  }
}
