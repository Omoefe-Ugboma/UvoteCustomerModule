import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { LoadCustomers } from 'src/app/core/store/actions/customer.action';
import { getCustomersLoading, getCustomers } from 'src/app/core/store/selectors/customer.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  loadingCustomers: boolean | undefined;
  customersTableData!: TableInfo;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customersTableData = {
      data: [],
      header: ['Title', 'Name', 'DateOfBirth', 'Gender', 'State','Country','CreatedBy','Status','View']
    };
    this.store.dispatch(new LoadCustomers());
    combineLatest(([this.store.select(getCustomersLoading), this.store.select(getCustomers)]))
      .subscribe(([loading, customers]) => {
        this.loadingCustomers = loading;
        const data = !customers ? [] : customers.map((opt: any) => ({
          Title: { type: 'text', value: opt.Title},
          Name: { type: 'link', value: opt.Name, url: `/customers/details/${opt.CUID}` },
          DateOfBirth: { type: 'text', value: opt.DateOfBirth },
          Gender: { type: 'text', value: opt.Gender },
          State: { type: 'text', value: opt.State },
          Country: { type: 'text', value: opt.Country },
          CreatedBy: { type: 'text', value: opt.CreatedBy },
          Status: {
            type: 'badge',
            value: opt.Status == 1 ? 'Active' : 'Inactive',
            class: opt.Status == 1 ? 'badge-success' : 'badge-danger'
          },
          'action': {
            type: 'button',
            value: opt.Status == 1 ? 'Disable' : 'Enable',
            class: opt.Status == 1 ? 'btn-danger' : 'btn-success'
          },
          View: { 
            type:'link',
            value: opt.View == 1 ? '':'View Customer', 
            url: `/customers/details/${opt.CUID}` }
        }));
        this.customersTableData = {...this.customersTableData, data, loading}
      });
  }

}
