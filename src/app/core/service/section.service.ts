import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpcall: HttpCallsService) { }

  getSections() {
    return this.httpcall.authGet('sections');
  }

  createSection(data: any) {
    return this.httpcall.authPost('sections/create', data);
  }

  updateSection(data: any) {
    return this.httpcall.authPost('sections/update', data);
  }

  getSectionGroups(data: any) {
    return this.httpcall.authGet2('sections/show-section-group', data);
  }

  createSectionGroup(data: any) {
    return this.httpcall.authPost('sections/groups/add', data);
  }

  deleteSectionGroup(data: any) {
    return this.httpcall.authPost('sections/groups/remove', data);
  }

  deleteSections(data: any) {
    return this.httpcall.authPost('sections/remove', data);
  }
}
