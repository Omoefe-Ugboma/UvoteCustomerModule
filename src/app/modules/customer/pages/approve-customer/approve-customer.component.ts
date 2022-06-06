import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CustomerService } from 'src/app/core/service/customer.service';
// import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-approve-customer',
  templateUrl: './approve-customer.component.html',
  styleUrls: ['./approve-customer.component.css']
})
export class ApproveCustomerComponent implements OnInit {

  @Input() item = '';
  @Input() customers!:any;
  // baseUrl: string = environment.baseApiUrl;
  
  alert: boolean = false;
  panelOpenState = false;
  // submitted: boolean = false;

  constructor(private apiService: CustomerService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

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
