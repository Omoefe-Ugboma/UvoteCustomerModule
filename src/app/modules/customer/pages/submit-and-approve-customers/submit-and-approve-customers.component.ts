import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CustomerService } from 'src/app/core/service/customer.service';


@Component({
  selector: 'app-submit-and-approve-customers',
  templateUrl: './submit-and-approve-customers.component.html',
  styleUrls: ['./submit-and-approve-customers.component.css']
})
export class SubmitAndApproveCustomersComponent implements OnInit, OnChanges {
  
  @Input() item = '';
  @Input() customers!:any;
  
  alert: boolean = false;

  submitted: boolean = false;

  constructor(private apiService: CustomerService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.submitted = this.customers?.IsSubmitted == 1 ? true:false ;

  } 


  refresh(): void {
    window.location.reload();
}

  submitApproval(custAppr: any){
    this.apiService.submitCustomer({id: custAppr}).subscribe(
      output =>{
       this.alert = true;
        // this.submitted = !this.submitted
        setInterval(() =>{ 
          this.refresh( )
        }, 3000);
      },
      error => console.log(error)
    )
  //   const request = this.customers = custAppr = 1
  //  console.log('[?] customer',request)
  }
  
  approvCustomer(appC: any){
    // const approved = this.customers = appC = 0
  //  console.log('[?] customer',approved)
   this.apiService.approveCustomer({id: appC}).subscribe(
     result =>{
       this.alert = true;
      //  alert(result.message)
      setInterval(() =>{ 
        this.refresh( )
      }, 3000);
        
     },
     error => console.log(error)
   )
  }

}
