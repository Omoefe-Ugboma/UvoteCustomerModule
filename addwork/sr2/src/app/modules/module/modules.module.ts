import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModuleComponent } from './page/module/module.component';
import { ModuleListComponent } from './page/module-list/module-list.component';
import { ModuleCreateComponent } from './page/module-create/module-create.component';
import { ModuleUpdateComponent } from './page/module-update/module-update.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ModuleComponent,
    ModuleListComponent,
    ModuleCreateComponent,
    ModuleUpdateComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule
  ]
})
export class ModulesModule { }
