import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenusComponent } from './page/menus/menus.component';
import { MenuCreateComponent } from './page/menu-create/menu-create.component';
import { MenuListComponent } from './page/menu-list/menu-list.component';
import { MenuUpdateComponent } from './page/menu-update/menu-update.component';


@NgModule({
  declarations: [
    MenusComponent,
    MenuCreateComponent,
    MenuListComponent,
    MenuUpdateComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SharedModule
  ]
})
export class MenuModule { }
