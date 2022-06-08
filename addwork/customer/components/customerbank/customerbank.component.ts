import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BankService } from 'src/app/core/service/bank.service';
import { LoadCustomerBanks } from 'src/app/core/store/actions/bank.action';
import { LoadCustomersDetail } from 'src/app/core/store/actions/customer.action';
import { getCustomerBanks } from 'src/app/core/store/selectors/bank.selector';
import { getCustomersDetail } from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { getErrorObj } from 'src/app/core/utils/error-utils';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-customerbank',
  templateUrl: './customerbank.component.html',
  styleUrls: ['./customerbank.component.css']
})
export class CustomerbankComponent implements OnInit {

  customer_banks_loading!: boolean;
  cuid!: any;
  banks: any = [];
  bank_id: any;
  customer_banks: any;

  constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private bankService: BankService) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }

  createupdateCustomerBankForm = new FormGroup({
    bank_name: new FormControl('', [Validators.required]),
    account_number: new FormControl('', [Validators.required]),
  });


  get bank_name() {
    return this.createupdateCustomerBankForm.get('bank_name') as FormControl;
  }

  get account_number() {
    return this.createupdateCustomerBankForm.get('account_number') as FormControl;
  }


  ngOnInit(): void {
    // this.getCustomerBanks();
    this.getAllBanks();
    this.getCustomerDetail();
  }




  getAllBanks() {
    this.store.dispatch(new LoadCustomerBanks());
    this.customer_banks = this.store.select(getCustomerBanks);
  }
  
  getCustomerDetail() {
    this.store.dispatch(new LoadCustomersDetail({ uuid: this.cuid }));
    this.store.select(getCustomersDetail).subscribe(customer => {
      if (customer) {
        this.banks = customer.banks;
      }
    });
  }

  createupdateCustomerBank(form: FormGroupDirective) {
    if (form.valid) {
      // const data = {...form.value, cuid: this.cuid};
      const data = this.bank_id ?
        {...form.value, cuid: this.cuid, id: this.bank_id} : {...form.value, cuid: this.cuid};
      this.bankService.createupdateBank(data).subscribe(bank => {
        this.notifyService.showSuccess(bank.message);
        this.getCustomerDetail();
        form.resetForm();
      }, error => {
        this.notifyService.showError(getErrorObj(error).msg);
      });
    }
  }


    setBankUpdateFormValue(id: any) {
          const selected_bank = this.banks.find((bank: { ID: any; }) => bank.ID == id);
          if (selected_bank) {
            this.account_number.setValue(selected_bank.AccountNumber);
            this.bank_name.setValue(selected_bank.BankName);
            this.bank_id = id;
          }
        }

}
