import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './page/group/group.component';
import { GroupListComponent } from './page/group-list/group-list.component';
import { GroupCreateComponent } from './page/group-create/group-create.component';
import { GroupUpdateComponent } from './page/group-update/group-update.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GroupComponent,
    GroupListComponent,
    GroupCreateComponent,
    GroupUpdateComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    SharedModule
  ]
})
export class GroupModule { }
