import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { LoadGroups } from 'src/app/core/store/actions/group.action';
import { UpdateModule, ResetCRUDModule, LoadModules, CreateModuleGroup, LoadModuleGroups, DeleteModuleGroup } from 'src/app/core/store/actions/module.action';
import { getGroups } from 'src/app/core/store/selectors/group.selector';
import { updateModuleLoading, updateModule, getModuleError, getModuleByUUID, createModuleGroup, createModuleGroupLoading, getModuleGroups, getModuleGroupsLoading, deleteModuleGroup, deleteModuleGroupLoading } from 'src/app/core/store/selectors/module.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-module-update',
  templateUrl: './module-update.component.html',
  styleUrls: ['./module-update.component.css']
})
export class ModuleUpdateComponent implements OnInit {

  loading!: boolean;
  module_id: any;
  module: any;
  module_groups!: Observable<any>;
  module_groups_loading!: Observable<boolean>;
  module_create_group_loading!: boolean;
  module_delete_group_loading!: boolean;
  groups: any;
  group_uuid_to_delete!: string;

  updateModuleForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    sequence: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

  moduleGroupForm = new FormGroup({
   group_uuid: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService, private activatedRoute: ActivatedRoute) {
    this.module_id = this.activatedRoute.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.setFormValues();
    this.getModuleGroups();
  }

  get name() {
    return this.updateModuleForm.get('name') as FormControl;
  }

  get description() {
    return this.updateModuleForm.get('description') as FormControl;
  }

  get sequence() {
    return this.updateModuleForm.get('sequence') as FormControl;
  }

  get active() {
    return this.updateModuleForm.get('active') as FormControl;
  }

  get group_uuid() {
    return this.moduleGroupForm.get('group_uuid') as FormControl;
  }

  updateModule(form: FormGroupDirective) {
    if (this.updateModuleForm.valid) {
      this.store.dispatch(new UpdateModule({...this.updateModuleForm.value, uuid: this.module_id}));
      combineLatest(([this.store.select(updateModuleLoading), this.store.select(updateModule), this.store.select(getModuleError)]))
        .subscribe(([loading, resp, error]) => {
          this.loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDModule());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDModule());
          }
        });
    }
  }

  setFormValues() {
    this.store.dispatch(new LoadModules());
    this.store.dispatch(new LoadGroups());
    this.store.select(getModuleByUUID(this.module_id)).subscribe(module => {
      if (module) {
        this.module = module;
        this.name.setValue(module.Name);
        this.description.setValue(module.Description);
        this.active.setValue(module.Active);
        this.sequence.setValue(module.Sequence);
      }
    });
  }

  getModuleGroups() {
    this.store.dispatch(new LoadModuleGroups({ uuid: this.module_id }));
    this.module_groups = this.store.select(getModuleGroups);
    this.module_groups_loading = this.store.select(getModuleGroupsLoading);
    this.groups = this.store.select(getGroups);
  }

  addModuleToGroups(form: FormGroupDirective) {
    if (this.moduleGroupForm.valid) {
      const data = {group_uuid: [this.group_uuid.value], module_uuid: this.module_id};
      this.store.dispatch(new CreateModuleGroup(data));
      combineLatest(([this.store.select(createModuleGroupLoading), this.store.select(createModuleGroup), this.store.select(getModuleError)]))
        .subscribe(([loading, resp, error]) => {
          this.module_create_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDModule());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDModule());
            this.getModuleGroups();
          }
        });
    }
  }

  removeModuleFromGroup() {
    const data = { group_uuid: [this.group_uuid_to_delete], module_uuid: this.module_id};
      this.store.dispatch(new DeleteModuleGroup(data));
      combineLatest(([this.store.select(deleteModuleGroupLoading), this.store.select(deleteModuleGroup), this.store.select(getModuleError)]))
        .subscribe(([loading, resp, error]) => {
          this.module_delete_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDModule());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDModule());
            this.getModuleGroups();
          }
        });
  }

}
