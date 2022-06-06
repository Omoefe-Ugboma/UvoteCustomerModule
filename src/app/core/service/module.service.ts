import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private httpcall: HttpCallsService) { }

  getModules() {
    return this.httpcall.authGet('modules');
  }

  getModule(data: any) {
    return this.httpcall.authGet2('modules/show', data);
  }

  getModuleGroups(data: any) {
    return this.httpcall.authGet2('modules/groups/show', data);
  }

  createModule(data: any) {
    return this.httpcall.authPost('modules/create', data);
  }

  updateModule(data: any) {
    return this.httpcall.authPost('modules/update', data);
  }

  createModuleGroup(data: any) {
    return this.httpcall.authPost('modules/groups/add', data);
  }

  deleteModuleGroup(data: any) {
    return this.httpcall.authPost('modules/groups/remove', data);
  }
}
