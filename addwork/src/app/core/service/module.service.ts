import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private remoteCall: RemoteCallService) { }

  getModules() {
    return this.remoteCall.authGet('modules');
  }

  getModule(data: any) {
    return this.remoteCall.authGet2('modules/show', data);
  }

  getModuleGroups(data: any) {
    return this.remoteCall.authGet2('modules/groups/show', data);
  }

  createModule(data: any) {
    return this.remoteCall.authPost('modules/create', data);
  }

  updateModule(data: any) {
    return this.remoteCall.authPost('modules/update', data);
  }

  createModuleGroup(data: any) {
    return this.remoteCall.authPost('modules/groups/add', data);
  }

  deleteModuleGroup(data: any) {
    return this.remoteCall.authPost('modules/groups/remove', data);
  }
}
