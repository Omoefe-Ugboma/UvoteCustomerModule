import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { DatatableComponent } from './component/datatable/datatable.component';
import { MaterialModule } from './material.module';
import { FormComponent } from './component/form/form.component';
import { validationMessages } from '../core/utils/form-validation';
import { ToastrModule } from 'ngx-toastr';
import { CollapseClickedDirective } from './directive/collapse-clicked.directive';

@NgModule({
  declarations: [
    DatatableComponent,
    FormComponent,
    FormComponent,
    CollapseClickedDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    FormlyModule.forRoot({ extras: { lazyRender: true }, validationMessages }),
    FormlyBootstrapModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    FormComponent,
    DatatableComponent,
    FormlyModule,
    FormlyBootstrapModule,
    CollapseClickedDirective
  ]
})
export class SharedModule { }
