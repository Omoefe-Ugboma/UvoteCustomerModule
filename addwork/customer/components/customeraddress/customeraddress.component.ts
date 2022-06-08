import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddressService } from 'src/app/core/service/address.service';
import { CustomerService } from 'src/app/core/service/customer.service';
import { LoadCustomerAddress } from 'src/app/core/store/actions/address.action';
import { LoadCustomersDetail } from 'src/app/core/store/actions/customer.action';
import { getCustomerAddress } from 'src/app/core/store/selectors/address.selector';
import { getCustomersDetail } from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { getErrorObj } from 'src/app/core/utils/error-utils';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-customeraddress',
  templateUrl: './customeraddress.component.html',
  styleUrls: ['./customeraddress.component.css']
})
export class CustomeraddressComponent implements OnInit {

   customer_address!: Observable<any[]>;
   customer_address_loading!: boolean;
   loading!: boolean;
   cuid!: any;
   cust_address: any =[];
  address_id: any;
 
   constructor(
    private store: Store<AppState>,
    private notifyService: NotificationService,
    private activatedRoute: ActivatedRoute,
     private customerService: CustomerService,
     private addressService: AddressService) {
    this.cuid = this.activatedRoute.snapshot.paramMap.get('cuid');
  }


  ngOnInit(): void {
    this.getAllAddress();
    this.getCustomerDetails();
  }

     createupdateCustomerAddressForm = new FormGroup({
        address: new FormControl('', [Validators.required]),
        address2: new FormControl('', [Validators.required]),      
     })

    get address() {
      return this.createupdateCustomerAddressForm.get('address') as FormControl;
      }
    get address2() {
      return this.createupdateCustomerAddressForm.get('address2') as FormControl;
      }
getCustomerDetails(){
      //  console.log(this.cuid);
       this.store.dispatch(new LoadCustomersDetail({uuid:this.cuid}));
       this.store.select(getCustomersDetail).subscribe(cust =>{
         if(cust){
          this.cust_address = cust.address;
          // console.log(this.cust_address);
         }
       });
      }
    

  getAllAddress(){
    this.store.dispatch(new LoadCustomerAddress());
    // this.store.select(getCustomerAddress).subscribe(address => console.log(address));
    this.customer_address = this.store.select(getCustomerAddress);
    this.store.select(getCustomerAddress).subscribe(abc =>console.log(abc));
  }

createupdateCustomerAddress(form: FormGroupDirective){
      if(form.valid){
        // console.log(form);
        const data = this.address_id ? 
          {...form.value, cuid:this.cuid, id: this.address_id}:{...form.value, cuid:this.cuid};
        this.addressService.createupdateCustomerAddress(data).subscribe(address =>{
          this.notifyService.showSuccess(address.message);
          this.getCustomerDetails();
          form.resetForm();
        }, error => {
          this.notifyService.showError(getErrorObj(error).msg);
        });
      }
    }

  setAddressUpdateFormValue(id: any){
        //  console.log(id);
        //  console.log(this.cust_address);
         const selected_address = this.cust_address.find((addr: { ID: any; }) => addr.ID == id)
         if(selected_address){
           this.address.setValue(selected_address.Address);
           this.address2.setValue(selected_address.Address2);
           this.address_id = id;
         }
        }
      
   
}
