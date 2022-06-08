import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectionsComponent } from './page/sections/sections.component';
import { SectionListComponent } from './page/section-list/section-list.component';
import { SectionCreateComponent } from './page/section-create/section-create.component';
import { SectionUpdateComponent } from './page/section-update/section-update.component';


@NgModule({
  declarations: [
    SectionsComponent,
    SectionListComponent,
    SectionCreateComponent,
    SectionUpdateComponent
  ],
  imports: [
    CommonModule,
    SectionRoutingModule,
    SharedModule
  ]
})
export class SectionModule { }
