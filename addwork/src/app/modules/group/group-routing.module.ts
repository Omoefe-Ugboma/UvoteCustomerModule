import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreateComponent } from './page/group-create/group-create.component';
import { GroupUpdateComponent } from './page/group-update/group-update.component';
import { GroupComponent } from './page/group/group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent
  },
  {
    path: 'groups-create',
    component: GroupCreateComponent
  },
  {
    path: 'group-item/:id',
    component: GroupUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
