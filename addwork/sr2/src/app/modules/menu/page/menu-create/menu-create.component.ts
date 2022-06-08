import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { CreateMenu, ResetCRUDMenu } from 'src/app/core/store/actions/menu.action';
import { LoadSections } from 'src/app/core/store/actions/section.action';
import { createMenuLoading, createMenu, getMenuError } from 'src/app/core/store/selectors/menu.selector';
import { getSections } from 'src/app/core/store/selectors/section.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent implements OnInit {

  loading: boolean | undefined;
  sections!: Observable<any>;

  createMenuForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    section_id: new FormControl('', [Validators.required]),
    active: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.getSections();
  }

  get name() {
    return this.createMenuForm.get('name') as FormControl;
  }

  get description() {
    return this.createMenuForm.get('description') as FormControl;
  }

  get section_id() {
    return this.createMenuForm.get('section_id') as FormControl;
  }

  get active() {
    return this.createMenuForm.get('active') as FormControl;
  }

  createMenu(form: FormGroupDirective) {
    if (this.createMenuForm.valid) {
      this.store.dispatch(new CreateMenu(this.createMenuForm.value));
      combineLatest(([this.store.select(createMenuLoading), this.store.select(createMenu), this.store.select(getMenuError)]))
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDMenu());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          form.resetForm();
          this.store.dispatch(new ResetCRUDMenu());
        }
      });
    }
  }

  getSections() {
    this.store.dispatch(new LoadSections());
    this.sections = this.store.select(getSections);
  }

}
