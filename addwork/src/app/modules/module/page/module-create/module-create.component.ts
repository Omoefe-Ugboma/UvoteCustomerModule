import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { CreateModule, ResetCRUDModule } from 'src/app/core/store/actions/module.action';
import { createModuleLoading, createModule, getModuleError } from 'src/app/core/store/selectors/module.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.css']
})
export class ModuleCreateComponent implements OnInit {

  loading: boolean | undefined;

  createModuleForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    sequence: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  get name() {
    return this.createModuleForm.get('name') as FormControl;
  }

  get description() {
    return this.createModuleForm.get('description') as FormControl;
  }

  get sequence() {
    return this.createModuleForm.get('sequence') as FormControl;
  }

  get active() {
    return this.createModuleForm.get('active') as FormControl;
  }

  createModule(form: FormGroupDirective) {
    if (this.createModuleForm.valid) {
      this.store.dispatch(new CreateModule(this.createModuleForm.value));
      combineLatest(([this.store.select(createModuleLoading), this.store.select(createModule), this.store.select(getModuleError)]))
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDModule());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          form.resetForm();
          this.store.dispatch(new ResetCRUDModule());
        }
      });
    }
  }

}
