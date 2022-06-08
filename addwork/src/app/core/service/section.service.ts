import { Injectable } from '@angular/core';
import { RemoteCallService } from './remote-call.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private remoteCall: RemoteCallService) { }

  getSections() {
    return this.remoteCall.authGet('sections');
  }

  createSection(data: any) {
    return this.remoteCall.authPost('sections/create', data);
  }

  updateSection(data: any) {
    return this.remoteCall.authPost('sections/update', data);
  }

  getSectionGroups(data: any) {
    return this.remoteCall.authGet2('sections/show-section-group', data);
  }

  createSectionGroup(data: any) {
    return this.remoteCall.authPost('sections/groups/add', data);
  }

  deleteSectionGroup(data: any) {
    return this.remoteCall.authPost('sections/groups/remove', data);
  }

  deleteSections(data: any) {
    return this.remoteCall.authPost('sections/remove', data);
  }
}
