import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { CustomerCreateComponent } from './page/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './page/customer-update/customer-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankComponent } from './components/bank/bank.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerUpdateComponent,
    CustomerCreateComponent,
    CustomerDetailsComponent,
    BankComponent
  ],
  imports: [
 
  CommonModule,
    CustomerRoutingModule,
    SharedModule
  ]
})
export class CustomerModule { }
