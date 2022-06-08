import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { LoadModules } from 'src/app/core/store/actions/module.action';
import { CreateSection, ResetCRUDSection } from 'src/app/core/store/actions/section.action';
import { getModules } from 'src/app/core/store/selectors/module.selector';
import { createSectionLoading, createSection, getSectionError } from 'src/app/core/store/selectors/section.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-section-create',
  templateUrl: './section-create.component.html',
  styleUrls: ['./section-create.component.css']
})
export class SectionCreateComponent implements OnInit {

  loading: boolean | undefined;
  modules!: Observable<any>;

  createSectionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    module_id: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.getModules();
  }

  get name() {
    return this.createSectionForm.get('name') as FormControl;
  }

  get description() {
    return this.createSectionForm.get('description') as FormControl;
  }

  get module_id() {
    return this.createSectionForm.get('module_id') as FormControl;
  }

  get active() {
    return this.createSectionForm.get('active') as FormControl;
  }

  createSection(form: FormGroupDirective) {
    if (this.createSectionForm.valid) {
      this.store.dispatch(new CreateSection(this.createSectionForm.value));
      combineLatest(([this.store.select(createSectionLoading), this.store.select(createSection), this.store.select(getSectionError)]))
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDSection());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          form.resetForm();
          this.store.dispatch(new ResetCRUDSection());
        }
      });
    }
  }

  getModules() {
    this.store.dispatch(new LoadModules());
    this.modules = this.store.select(getModules);
  }

}
