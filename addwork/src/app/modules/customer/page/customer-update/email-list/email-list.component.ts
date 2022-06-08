import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
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
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit{
  customer_email!: Observable<any[]>;
  customer_email_loading!: boolean;
  loading!: boolean;
  cuid!: any;
  cust_email: any =[];
  isEnabled!: boolean;
  email_id:any;

  constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }

  createupdateCustomerEmailForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    email2: new FormControl('', [Validators.required]),
    
})


  get email() {
    return this.createupdateCustomerEmailForm.get('email') as FormControl;
  }

  get email2() {
    return this.createupdateCustomerEmailForm.get('email2') as FormControl;
  }
  get id2() {
    return this.createupdateCustomerEmailForm.get('id') as FormControl;
  }



  ngOnInit(): void {
    this.getAllEmail();
    this.getCustomerDetails();
  }




  getAllEmail(){
    this.store.dispatch(new LoadCustomerEmail());
    this.customer_email = this.store.select(getCustomerEmail);
    this.store.select(getCustomerEmail).subscribe(abc =>console.log(abc));
    }

    createupdateCustomerEmail(form: FormGroupDirective){
    if(form.valid){
      const data = this.email_id ? 
        {...form.value, cuid:this.cuid, id: this.email_id}:{...form.value, cuid:this.cuid};
      this.emailService.createupdateCustomerMail(data).subscribe(email =>{
        this.notifyService.showSuccess(email.message);
        this.getCustomerDetails();
        form.resetForm();
      }, error =>{
        this.notifyService.showError(getErrorObj(error).msg);
      });
    }

  }

   getCustomerDetails(){
     this.store.dispatch(new LoadCustomersDetail({uuid:this.cuid}));
     this.store.select(getCustomersDetail).subscribe(cust =>{
       if(cust){
        this.cust_email = cust.email;
       }
     });
    }

   setEmailUpdateFormValue(id: any){
     const selected_email = this.cust_email.find((addr: { ID: any; }) => addr.ID == id)
     if(selected_email){
       this.email.setValue(selected_email.Email);
       this.email2.setValue(selected_email.Email2);
       this.email_id = id;
     }
    }

}
