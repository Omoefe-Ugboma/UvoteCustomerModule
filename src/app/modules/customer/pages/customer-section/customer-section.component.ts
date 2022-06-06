import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import { getCustomers, getCustomersLoading } from './../../../../core/store/selectors/customer.selector';
import { combineLatest, Observable } from 'rxjs';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './../../../../core/service/customer.service';
import { LoadCustomers } from 'src/app/core/store/actions/customer.action';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';
// import { environment } from './../../../../../environments/environment';


@Component({
  selector: 'app-customer-section',
  templateUrl: './customer-section.component.html',
  styleUrls: ['./customer-section.component.css']
})
export class CustomerSectionComponent implements OnInit{
  // showEditForm = false;
 FirstName:any;
  loading!: boolean;
  // customers!: Observable<any[]>;
  customers:any = [];
  customers_loading!: Observable<boolean>;
  selectedCustomer = null;
  editedCustomer = null;
  // baseURL = environment.baseApiUrl2;
  baseURL = 'https://iofserp.investment-one.com/';

  constructor(private store: Store<AppState>,
    private activatedRoute: ActivatedRoute){}

  totalLength: any;
  page:number = 0;


  // constructor(private productService: CustomerService) {
  //   this.productService.getCustomers()
  //   .subscribe((products: any) => {
  //        this.customers = products.data;
  //       console.log(this.customers = products)
  //     });
  // }

    ngOnInit(): void {
      console.log(this.baseURL);
     this.AllCustomers();
    }

    AllCustomers() {
    this.store.dispatch(new LoadCustomers());
    this.customers_loading = this.store.select(getCustomersLoading);

    this.store.select(getCustomers).subscribe((cust) => {
      
      if (cust) {
        this.customers = cust.map((customer: any) => {
          let docpath = {IdentificationProof: '',Photograph:'',ProofofResidence:'',Signature:''};
          if (customer.DocumentPath && customer.DocumentPath != 'NULL') {
          // if (customer.DocumentPath && customer.DocumentPath != 'NULL') {
          
            // console.log(['Type of document path '],typeof customer.DocumentPath);
           let tempPath = typeof customer.DocumentPath === "string" ? JSON.parse(customer.DocumentPath): customer.DocumentPath;

           
            // docpath.IdentificationProof = `${this.baseURL}${docpath.IdentificationProof}`;
            if(tempPath != null){
              docpath.IdentificationProof = tempPath.IdentificationProof.replace('public/',this.baseURL);
              docpath.Photograph = tempPath.Photograph.replace('public/',this.baseURL);
              docpath.ProofofResidence = tempPath.ProofofResidence.replace('public/',this.baseURL);
              docpath.Signature = tempPath.Signature.replace('public/',this.baseURL);
              // console.log(['Before document'],docpath)
            }
            // docpath.IdentificationProof = `${this.baseURL}${docpath.IdentificationProof}`;
            // docpath.Photograph = `${this.baseURL}${docpath.Photograph}`;
            // docpath.ProofofResidence = `${this.baseURL}${docpath.ProofofResidence}`;
            // docpath.Signature = `${this.baseURL}${docpath.Signature}`;
          }
          // console.log(['After document'],customer)
          return {...customer, activeLink: docpath };
          
        });
        // console.log(this.customers);
        
      }
    });
  }

  selectCustomer(cust:any){
    this.selectedCustomer = cust;
    // console.log(this.selectedCustomer)
  }

  editCustomer(cust:any){
    // this.showEditForm = true;
    this.editedCustomer = cust;
    console.log(this.editedCustomer)
    // const PersonMasterID = this.activatedRoute.snapshot.paramMap.get('PersonMasterID');
  }
 
  search(){
    if(this.FirstName == ""){
      this.AllCustomers();
    }else{
      this.customers = this.customers.filter((res: { FirstName: string; }) =>{
        return res.FirstName.toLocaleLowerCase().match(this.FirstName.toLocaleLowerCase());
      })
    }
  }  

}


