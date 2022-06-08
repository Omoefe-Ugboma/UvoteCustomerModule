import { combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/core/store/state/app.state';
import { getUsers, getUsersLoading } from 'src/app/core/store/selectors/user.selector';
import { LoadUsers } from 'src/app/core/store/actions/user.action';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  loadingUsers: boolean | undefined;
  usersTableData!: TableInfo;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersTableData = {
      data: [],
      header: ['username', 'name', 'email', 'status']
    };
    this.store.dispatch(new LoadUsers());
    combineLatest(([this.store.select(getUsersLoading), this.store.select(getUsers)]))
      .subscribe(([loading, users]) => {
        this.loadingUsers = loading;
        const data = !users ? [] : users.map((opt: any) => ({
          email: { type: 'link', value: opt.Email, url: `/users/user-item/${opt.UUID}` },
          username: { type: 'link', value: opt.UserName, url: `/users/user-item/${opt.UUID}` },
          name: { type: 'text', value: opt.FullName },
          status: {
            type: 'badge',
            value: opt.Status == 1 ? 'Active' : 'Inactive',
            class: opt.Status == 1 ? 'badge-success' : 'badge-danger'
          },
          'action': {
            type: 'button',
            value: opt.Status == 1 ? 'Disable' : 'Enable',
            class: opt.Status == 1 ? 'btn-danger' : 'btn-success'
          },
        }));
        this.usersTableData = {...this.usersTableData, data, loading}
      });
  }

}
