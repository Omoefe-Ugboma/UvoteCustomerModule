import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { DisableUser, EnableUser, LoadUsers, ResetCRUDUser, UpdateUser, CreateUserGroup, DeleteUserGroup, LoadUserGroups, ResetUserPassword } from 'src/app/core/store/actions/user.action';
import { getUserError, getUserByUUID, updateUserLoading, updateUser, disableUserLoading, disableUser, enableUserLoading, enableUser, resetUserPasswordLoading, resetUserPassword, getUserGroups, getUserGroupsLoading, createUserGroupLoading, createUserGroup, deleteUserGroupLoading, deleteUserGroup } from 'src/app/core/store/selectors/user.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { LoadGroups } from 'src/app/core/store/actions/group.action';
import { getGroups } from 'src/app/core/store/selectors/group.selector';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  loading!: boolean;
  enabling_user!: boolean;
  disabling_user!: boolean;
  changing_password!: boolean;
  user_id: any;
  user: any;
  user_groups!: Observable<any>;
  user_groups_loading!: Observable<boolean>;
  user_create_group_loading!: boolean;
  user_delete_group_loading!: boolean;
  groups: any;
  group_uuid_to_delete!: string;

  isEnabled!: boolean;

  updateUserForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
  });

  userGroupForm = new FormGroup({
   group_uuid: new FormControl('', [Validators.required]),
  });

  constructor(private store: Store<AppState>, private notifyService: NotificationService, private activatedRoute: ActivatedRoute) {
    this.user_id = this.activatedRoute.snapshot.paramMap.get('uuid');
  }

  ngOnInit(): void {
    this.setFormValues();
    this.getUserGroups();
  }

  get username() {
    return this.updateUserForm.get('username') as FormControl;
  }

  get firstname() {
    return this.updateUserForm.get('firstname') as FormControl;
  }

  get lastname() {
    return this.updateUserForm.get('lastname') as FormControl;
  }

  get password() {
    return this.passwordForm.get('password') as FormControl;
  }

  get group_uuid() {
    return this.userGroupForm.get('group_uuid') as FormControl;
  }

  updateUser(form: FormGroupDirective) {
    if (this.updateUserForm.valid) {
      this.store.dispatch(new UpdateUser(this.updateUserForm.value));
      combineLatest(([this.store.select(updateUserLoading), this.store.select(updateUser), this.store.select(getUserError)]))
        .subscribe(([loading, resp, error]) => {
          this.loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDUser());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDUser());
          }
        });
    }
  }

  changeUserStatus(value: any) {
    if (value.checked) {
      this.enableAUser();
    } else {
      this.disableAUser();
    }
  }

  disableAUser() {
    this.store.dispatch(new DisableUser({ uuid: this.user_id }));
    combineLatest([this.store.select(disableUserLoading), this.store.select(disableUser), this.store.select(getUserError)])
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDUser());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          this.store.dispatch(new ResetCRUDUser());
        }
      });
  }

  enableAUser() {
    this.store.dispatch(new EnableUser({ uuid: this.user_id }));
    combineLatest([this.store.select(enableUserLoading), this.store.select(enableUser), this.store.select(getUserError)])
      .subscribe(([loading, resp, error]) => {
        this.loading = loading;
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetCRUDUser());
        }
        if (resp && resp.status === true) {
          this.notifyService.showSuccess(resp.message);
          this.store.dispatch(new ResetCRUDUser());
        }
      });
  }

  setFormValues() {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new LoadGroups());
    this.store.select(getUserByUUID(this.user_id)).subscribe(user => {
      if (user) {
        this.user = user;
        this.username.setValue(user.UserName);
        this.firstname.setValue(user.FirstName);
        this.lastname.setValue(user.LastName);
        this.isEnabled = user.Status == 1 ? true : false;
      }
    });
  }

  updatePassword(form: FormGroupDirective) {
    if (this.passwordForm.valid) {
      this.store.dispatch(new ResetUserPassword({ new_password: this.password.value, username: this.user.UserName }));
      combineLatest(([this.store.select(resetUserPasswordLoading), this.store.select(resetUserPassword), this.store.select(getUserError)]))
        .subscribe(([loading, resp, error]) => {
          this.changing_password = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDUser());
          }
          if (resp && resp.status === true) {
            form.resetForm();
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDUser());
          }
        });
    }
  }

  getUserGroups() {
    this.store.dispatch(new LoadUserGroups({ uuid: this.user_id }));
    this.user_groups = this.store.select(getUserGroups);
    this.user_groups_loading = this.store.select(getUserGroupsLoading);
    this.groups = this.store.select(getGroups);
  }

  addUserToGroups(form: FormGroupDirective) {
    if (this.userGroupForm.valid) {
      const data = {...this.userGroupForm.value, user_uuid: [this.user_id]};
      this.store.dispatch(new CreateUserGroup(data));
      combineLatest(([this.store.select(createUserGroupLoading), this.store.select(createUserGroup), this.store.select(getUserError)]))
        .subscribe(([loading, resp, error]) => {
          this.user_create_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDUser());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDUser());
            this.getUserGroups();
          }
        });
    }
  }

  removeUserFromGroup() {
    const data = { group_uuid: this.group_uuid_to_delete, user_uuid: [this.user_id]};
      this.store.dispatch(new DeleteUserGroup(data));
      combineLatest(([this.store.select(deleteUserGroupLoading), this.store.select(deleteUserGroup), this.store.select(getUserError)]))
        .subscribe(([loading, resp, error]) => {
          this.user_delete_group_loading = loading;
          if (error) {
            this.notifyService.showError(error.msg);
            this.store.dispatch(new ResetCRUDUser());
          }
          if (resp && resp.status === true) {
            this.notifyService.showSuccess(resp.message);
            this.store.dispatch(new ResetCRUDUser());
            this.getUserGroups();
          }
        });
  }

}
