import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { LoadGroups } from 'src/app/core/store/actions/group.action';
import { LoadModules } from 'src/app/core/store/actions/module.action';
import { UpdateSection, ResetCRUDSection, DeleteSection, LoadSections, CreateSectionGroup, DeleteSectionGroup, LoadSectionGroups } from 'src/app/core/store/actions/section.action';
import { getGroups } from 'src/app/core/store/selectors/group.selector';
import { getModules } from 'src/app/core/store/selectors/module.selector';
import { updateSectionLoading, updateSection, getSectionError, deleteSectionLoading, deleteSection, createSectionGroupLoading, createSectionGroup, deleteSectionGroupLoading, deleteSectionGroup, getSectionBySectionID, getSectionGroups, getSectionGroupsLoading } from 'src/app/core/store/selectors/section.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-section-update',
  templateUrl: './section-update.component.html',
  styleUrls: ['./section-update.component.css']
})
export class SectionUpdateComponent implements OnInit {

  loading!: boolean;
  deleting_section!: boolean;
  section_id: any;
  section: any;
  section_groups!: Observable<any>;
  section_groups_loading!: Observable<boolean>;
  section_create_group_loading!: boolean;
  section_delete_group_loading!: boolean;
  groups: any;
  group_uuid_to_delete!: string;
  modules!: Observable<any>;

  isEnabled!: boolean;

  updateSectionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // module_id: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

  sectionGroupForm = new FormGroup({
   group_uuid: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService, private activatedRoute: ActivatedRoute) {
    this.section_id = this.activatedRoute.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.setFormValues();
    this.getSectionGroups();
    this.getModules();
  }

  get name() {
    return this.updateSectionForm.get('name') as FormControl;
  }

  get description() {
    return this.updateSectionForm.get('description') as FormControl;
  }

  // get module_id() {
  //   return this.updateSectionForm.get('module_id') as FormControl;
  // }

  get active() {
    return this.updateSectionForm.get('active') as FormControl;
  }

  get group_uuid() {
    return this.sectionGroupForm.get('group_uuid') as FormControl;
  }

  updateSection(form: FormGroupDirective) {
    if (this.updateSectionForm.valid) {
      this.store.dispatch(new UpdateSection({...this.updateSectionForm.value, uuid: this.section_id}));
      combineLatest(([this.store.select(updateSectionLoading), this.store.select(updateSection), this.store.select(getSectionError)]))
        .subscribe(([loading, resp, error]) => {
          this.loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDSection());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDSection());
          }
        });
    }
  }

  deleteASection() {
    this.store.dispatch(new DeleteSection({ uuid: this.section_id }));
    combineLatest([this.store.select(deleteSectionLoading), this.store.select(deleteSection), this.store.select(getSectionError)])
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDSection());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          this.store.dispatch(new ResetCRUDSection());
        }
      });
  }

  setFormValues() {
    this.store.dispatch(new LoadSections());
    this.store.dispatch(new LoadGroups());
    this.store.select(getSectionBySectionID(this.section_id)).subscribe(section => {
      if (section) {
        this.section = section;
        this.name.setValue(section.Name);
        this.description.setValue(section.Description);
        this.active.setValue(section.Active);
        // this.module_id.setValue(section.ModuleID);
      }
    });
  }

  getSectionGroups() {
    this.store.dispatch(new LoadSectionGroups({ uuid: this.section_id }));
    this.section_groups = this.store.select(getSectionGroups);
    this.section_groups_loading = this.store.select(getSectionGroupsLoading);
    this.groups = this.store.select(getGroups);
  }

  addSectionToGroups(form: FormGroupDirective) {
    if (this.sectionGroupForm.valid) {
      const data = {...this.sectionGroupForm.value, section_uuid: [this.section_id]};
      this.store.dispatch(new CreateSectionGroup(data));
      combineLatest(([this.store.select(createSectionGroupLoading), this.store.select(createSectionGroup), this.store.select(getSectionError)]))
        .subscribe(([loading, resp, error]) => {
          this.section_create_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDSection());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDSection());
            this.getSectionGroups();
          }
        });
    }
  }

  removeSectionFromGroup() {
    const data = { group_uuid: this.group_uuid_to_delete, section_uuid: [this.section_id]};
      this.store.dispatch(new DeleteSectionGroup(data));
      combineLatest(([this.store.select(deleteSectionGroupLoading), this.store.select(deleteSectionGroup), this.store.select(getSectionError)]))
        .subscribe(([loading, resp, error]) => {
          this.section_delete_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDSection());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDSection());
            this.getSectionGroups();
          }
        });
  }

  getModules() {
    this.store.dispatch(new LoadModules());
    this.modules = this.store.select(getModules);
  }

}
