import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { UpdateGroup, ResetCRUDGroup, LoadGroups } from 'src/app/core/store/actions/group.action';
import { updateGroupLoading, updateGroup, getGroupError, getGroupByID } from 'src/app/core/store/selectors/group.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-group-update',
  templateUrl: './group-update.component.html',
  styleUrls: ['./group-update.component.css']
})
export class GroupUpdateComponent implements OnInit {

  loading!: boolean;
  group_id: any;
  group: any;

  updateGroupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    uuid: new FormControl('')
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService, private activatedRoute: ActivatedRoute) {
    this.group_id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.setFormValues();
  }

  get name() {
    return this.updateGroupForm.get('name') as FormControl;
  }

  get description() {
    return this.updateGroupForm.get('description') as FormControl;
  }

  get uuid() {
    return this.updateGroupForm.get('uuid') as FormControl;
  }

  updateGroup(form: FormGroupDirective) {
    if (this.updateGroupForm.valid) {
      this.store.dispatch(new UpdateGroup({...this.updateGroupForm.value, uuid: [this.uuid.value]}));
      combineLatest(([this.store.select(updateGroupLoading), this.store.select(updateGroup), this.store.select(getGroupError)]))
        .subscribe(([loading, resp, error]) => {
          this.loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDGroup());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDGroup());
          }
        });
    }
  }

  setFormValues() {
    this.store.dispatch(new LoadGroups());
    this.store.select(getGroupByID(this.group_id)).subscribe(group => {
      if (group) {
        this.group = group;
        this.name.setValue(group.GroupName);
        this.uuid.setValue(group.GroupID);
        this.description.setValue(group.Description);
      }
    });
  }
}
