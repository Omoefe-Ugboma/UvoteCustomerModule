import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCreateComponent } from './page/menu-create/menu-create.component';
import { MenuListComponent } from './page/menu-list/menu-list.component';
import { MenuUpdateComponent } from './page/menu-update/menu-update.component';

const routes: Routes = [
  {
    path: '',
    component: MenuListComponent
  },
  {
    path: 'menu-create',
    component: MenuCreateComponent
  },
  {
    path: 'menu-update/:uuid',
    component: MenuUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
