import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleCreateComponent } from './page/module-create/module-create.component';
import { ModuleListComponent } from './page/module-list/module-list.component';
import { ModuleUpdateComponent } from './page/module-update/module-update.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleListComponent
  },
  {
    path: 'modules-create',
    component: ModuleCreateComponent
  },
  {
    path: 'module-update/:uuid',
    component: ModuleUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
