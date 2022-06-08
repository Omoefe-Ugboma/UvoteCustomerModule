import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { CreateUser, ResetCRUDUser } from 'src/app/core/store/actions/user.action';
import { createUserLoading, createUser, getUserError } from 'src/app/core/store/selectors/user.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  loading: boolean | undefined;

  createUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  get username() {
    return this.createUserForm.get('username') as FormControl;
  }

  get password() {
    return this.createUserForm.get('password') as FormControl;
  }

  get firstname() {
    return this.createUserForm.get('firstname') as FormControl;
  }

  get lastname() {
    return this.createUserForm.get('lastname') as FormControl;
  }

  get email() {
    return this.createUserForm.get('email') as FormControl;
  }

  createUser(form: FormGroupDirective) {
    if (this.createUserForm.valid) {
      this.store.dispatch(new CreateUser(this.createUserForm.value));
      combineLatest(([this.store.select(createUserLoading), this.store.select(createUser), this.store.select(getUserError)]))
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDUser());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          form.resetForm();
          this.store.dispatch(new ResetCRUDUser());
        }
      });
    }
  }

}
