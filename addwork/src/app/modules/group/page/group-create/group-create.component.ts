import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { CreateGroup, ResetCRUDGroup } from 'src/app/core/store/actions/group.action';
import { createGroupLoading, createGroup, getGroupError } from 'src/app/core/store/selectors/group.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.css']
})
export class GroupCreateComponent implements OnInit {

  loading: boolean | undefined;

  createGroupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  get name() {
    return this.createGroupForm.get('name') as FormControl;
  }

  get description() {
    return this.createGroupForm.get('description') as FormControl;
  }

  createGroup(form: FormGroupDirective) {
    if (this.createGroupForm.valid) {
      this.store.dispatch(new CreateGroup(this.createGroupForm.value));
      combineLatest(([this.store.select(createGroupLoading), this.store.select(createGroup), this.store.select(getGroupError)]))
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDGroup());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          form.resetForm();
          this.store.dispatch(new ResetCRUDGroup());
        }
      });
    }
  }


}
