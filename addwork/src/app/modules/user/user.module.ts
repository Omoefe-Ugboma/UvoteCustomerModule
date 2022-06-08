import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersListComponent } from './page/users-list/users-list.component';
import { UsersCreateComponent } from './page/users-create/users-create.component';
import { UserItemComponent } from './page/user-item/user-item.component';


@NgModule({
  declarations: [
    UsersListComponent,
    UsersCreateComponent,
    UserItemComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
