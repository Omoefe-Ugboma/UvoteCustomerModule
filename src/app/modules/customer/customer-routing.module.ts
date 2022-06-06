import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdataComponent } from './components/customerdata/customerdata.component';
import { CustomerModuleComponent } from './pages/customer-module/customer-module.component';
import { CustomerSectionComponent } from './pages/customer-section/customer-section.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomernewComponent } from './pages/customernew/customernew.component';
import { PendingCustomersComponent } from './pages/pending-customers/pending-customers.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
  {
    path: 'new',
    component: CustomernewComponent
  },
  {
    path: 'info',
    component: CustomerModuleComponent
  },
  // {
  //   path: 'info',
  //   component: CustomerSectionComponent
  // },
  {
    path: 'pending',
    component: PendingCustomersComponent
  },
  {
    path: 'details/:cuid',
    component: CustomerdataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class CustomerRoutingModule { }
