import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadCustomersDetail } from 'src/app/core/store/actions/customer.action';
import { getCustomersDetail } from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { EmailService } from 'src/app/core/service/email.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  cuid!: any;
  cust_email: any =[];

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }  

  ngOnInit(): void {
    this.getCustomerDetails();
    this.emailService.getCustomerMail();
  }

   getCustomerDetails(){
     this.store.dispatch(new LoadCustomersDetail({uuid:this.cuid}));
     this.store.select(getCustomersDetail).subscribe(cust =>{
       if(cust){
        this.cust_email = cust.email;
       }
     });
    }
    

}
