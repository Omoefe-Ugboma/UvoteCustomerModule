import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTestParentComponent } from './components/customer-test-parent/customer-test-parent.component';
import { CustomerCreateComponent } from './page/customer-create/customer-create.component';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './page/customer-update/customer-update.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: 'details/:cuid',
    component: CustomerUpdateComponent,
    children:[
      {
        path: 'edit/:id',
        component: CustomerTestParentComponent
      },
    ],
  },

  {
    path: 'create-customer',
    component: CustomerCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
