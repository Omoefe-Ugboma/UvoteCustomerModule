import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionCreateComponent } from './page/section-create/section-create.component';
import { SectionListComponent } from './page/section-list/section-list.component';
import { SectionUpdateComponent } from './page/section-update/section-update.component';

const routes: Routes = [
  {
    path: '',
    component: SectionListComponent
  },
  {
    path: 'section-create',
    component: SectionCreateComponent
  },
  {
    path: 'section-update/:uuid',
    component: SectionUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
