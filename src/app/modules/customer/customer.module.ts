import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerSearchComponent } from './components/customer-search/customer-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerPublishComponent } from './components/customer-publish/customer-publish.component';
import { CustomerAddressComponent } from './components/customer-address/customer-address.component';
import { CustomerEmailComponent } from './components/customer-email/customer-email.component';
import { CustomerPhoneComponent } from './components/customer-phone/customer-phone.component';
import { CustomerNextofkinsComponent } from './components/customer-nextofkins/customer-nextofkins.component';
import { CustomerBanksComponent } from './components/customer-banks/customer-banks.component';
import { CustomernewComponent } from './pages/customernew/customernew.component';
import { CustomerdataComponent } from './components/customerdata/customerdata.component';
import { CustomerSectionComponent } from './pages/customer-section/customer-section.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CreateCustomerDraftComponent } from './components/create-customer-draft/create-customer-draft.component';
import { CustomerdataemailComponent } from './components/customerdataemail/customerdataemail.component';
import { CustomerdataphoneComponent } from './components/customerdataphone/customerdataphone.component';
import { CustomerdatabanksComponent } from './components/customerdatabanks/customerdatabanks.component';
import { CustomerdatanextofkinsComponent } from './components/customerdatanextofkins/customerdatanextofkins.component';
import { CustomerdataAddressComponent } from './components/customerdata-address/customerdata-address.component';
import { EditcustomerUpdateComponent } from './components/editcustomer-update/editcustomer-update.component';
import { PendingCustomersComponent } from './pages/pending-customers/pending-customers.component';
import { SubmitAndApproveCustomersComponent } from './pages/submit-and-approve-customers/submit-and-approve-customers.component';
import { CustomerModuleComponent } from './pages/customer-module/customer-module.component';
import { ApproveCustomerComponent } from './pages/approve-customer/approve-customer.component';
import { SubmitApprovalComponent } from './pages/submit-approval/submit-approval.component';
import { CustomerApproveListComponent } from './pages/customer-approve-list/customer-approve-list.component';
import { CustomerSubmitListComponent } from './pages/customer-submit-list/customer-submit-list.component';
import { CustomerListNotSubmittedComponent } from './Draft/customer-list-not-submitted/customer-list-not-submitted.component';
import { CustomerSectionDraftComponent } from './pages/customer-section-draft/customer-section-draft.component';
import { CustomerSectionApproveComponent } from './pages/customer-section-approve/customer-section-approve.component';
import { CustomerListSubmittedComponent } from './Draft/customer-list-submitted/customer-list-submitted.component';
import { KycDocumentsComponent } from './components/kyc-documents/kyc-documents.component';


@NgModule({
  declarations: [
    CustomerdataComponent,
    CustomerComponent,
    CustomerSearchComponent,
    CustomerInfoComponent,
    CustomerPublishComponent,
    CustomerAddressComponent,
    CustomerEmailComponent,
    CustomerPhoneComponent,
    CustomerNextofkinsComponent,
    CustomerBanksComponent,
    CustomernewComponent,
    CustomerSectionComponent,
    CustomerListComponent,
    CreateCustomerDraftComponent,
    CustomerdataemailComponent,
    CustomerdataphoneComponent,
    CustomerdatabanksComponent,
    CustomerdatanextofkinsComponent,
    CustomerdataAddressComponent,
    EditcustomerUpdateComponent,
    PendingCustomersComponent,
    SubmitAndApproveCustomersComponent,
    CustomerModuleComponent,
    ApproveCustomerComponent,
    SubmitApprovalComponent,
    CustomerApproveListComponent,
    CustomerSubmitListComponent,
    CustomerListNotSubmittedComponent,
    CustomerSectionDraftComponent,
    CustomerSectionApproveComponent,
    CustomerListSubmittedComponent,
    KycDocumentsComponent
  ],
  imports: [
  
  CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    SharedModule
  ]
})
export class CustomerModule { }
