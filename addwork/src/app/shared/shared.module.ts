import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { DatatableComponent } from './component/datatable/datatable.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormComponent } from './component/form/form.component';

@NgModule({
  declarations: [
    DatatableComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FormlyModule,
    FormlyBootstrapModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DatatableComponent,
    FormComponent,
    FormlyModule,
    FormlyBootstrapModule
  ]
})
export class SharedModule { }
