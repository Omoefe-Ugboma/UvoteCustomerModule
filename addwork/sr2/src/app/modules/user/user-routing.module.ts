import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './page/users-list/users-list.component';
import { UsersCreateComponent } from './page/users-create/users-create.component';
import { UserItemComponent } from './page/user-item/user-item.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users-list',
        component: UsersListComponent
      },
      {
        path: 'users-create',
        component: UsersCreateComponent
      },
      {
        path: 'user-item/:uuid',
        component: UserItemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
