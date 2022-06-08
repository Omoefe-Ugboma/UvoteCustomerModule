import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './page/customer-list/customer-list.component';
import { CustomerCreateComponent } from './page/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './page/customer-update/customer-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BankComponent } from './components/bank/bank.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddressComponent } from './components/address/address.component';
import { EmailComponent } from './components/email/email.component';
import { CreateupdateemailComponent } from './components/email/createupdateemail/createupdateemail.component';
import { EmailCreateUpdateComponent } from './components/email-create-update/email-create-update.component';
import { EmailListComponent } from './page/customer-update/email-list/email-list.component';
import { EmailService } from 'src/app/core/service/email.service';
import { CustomerbankComponent } from './components/customerbank/customerbank.component';
import { CustomeraddressComponent } from './components/customeraddress/customeraddress.component';
import { CustomerTestParentComponent } from './components/customer-test-parent/customer-test-parent.component';
import { CustomerViewComponent } from './components/customer-view/customer-view.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerUpdateComponent,
    CustomerCreateComponent,
    CustomerDetailsComponent,
    BankComponent,
    AddressComponent,
    EmailComponent,
    CreateupdateemailComponent,
    EmailCreateUpdateComponent,
    EmailListComponent,
    CustomerbankComponent,
    CustomeraddressComponent,
    CustomerTestParentComponent,
    CustomerViewComponent,
 
   

  ],
  imports: [
 
  CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  providers:[
    EmailService
  ]
})
export class CustomerModule { }
