import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmailService } from 'src/app/core/service/email.service';
import { LoadCustomersDetail } from 'src/app/core/store/actions/customer.action';
import { LoadCustomerEmail } from 'src/app/core/store/actions/email.action';
import { getCustomersDetail } from 'src/app/core/store/selectors/customer.selector';
import { getCustomerEmail } from 'src/app/core/store/selectors/email.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { getErrorObj } from 'src/app/core/utils/error-utils';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-email-create-update',
  templateUrl: './email-create-update.component.html',
  styleUrls: ['./email-create-update.component.css']
})
export class EmailCreateUpdateComponent implements OnInit {

  customer_email!: Observable<any[]>;
  customer_email_loading!: boolean;
  loading!: boolean;
  cuid!: any;
  cust_email: any = [];
  isEnabled!: boolean;
  email_id: any;

  createupdateCustomerEmailForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    email2: new FormControl('', [Validators.required]),

  })

  constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }

  ngOnInit(): void {
    
  }

 

 
 
  get email() {
    return this.createupdateCustomerEmailForm.get('email') as FormControl;
  }

  get email2() {
    return this.createupdateCustomerEmailForm.get('email2') as FormControl;
  }

  createupdateCustomerEmail(form: FormGroupDirective) {
    if (form.valid) {
      const data = this.email_id ?
        { ...form.value, cuid: this.cuid, id: this.email_id } : { ...form.value, cuid: this.cuid };
      this.emailService.createupdateCustomerMail(data).subscribe(email => {
        this.notifyService.showSuccess(email.message);
        form.resetForm();
      }, error => {
        this.notifyService.showError(getErrorObj(error).msg);
      });
    }
  }


  
//  setEmailUpdateFormValue(id: any){
//     //  console.log(id);
//     //  console.log(this.cust_address);
//      const selected_email = this.cust_email.find((addr: { ID: any; }) => addr.ID == id)
//      if(selected_email){
//        this.email.setValue(selected_email.Email);
//        this.email2.setValue(selected_email.Email2);
//        this.email_id = id;
//      }
//     }

    //  getCustomerDetails() {
    // //  console.log(this.cuid);
    // this.store.dispatch(new LoadCustomersDetail({ uuid: this.cuid }));
    // this.store.select(getCustomersDetail).subscribe(cust => {
    //   if (cust) {
    //     this.cust_email = cust.email;
    //     // console.log(this.cust_email);
    //   }
    // });
  // }

  //   getAllEmail() {
  //   this.store.dispatch(new LoadCustomerEmail());
  //   // this.store.select(getCustomerAddress).subscribe(address => console.log(address));
  //   this.customer_email = this.store.select(getCustomerEmail);
  //   this.store.select(getCustomerEmail).subscribe(abc => console.log(abc));
  // }

}
