import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { LoadMenus } from 'src/app/core/store/actions/menu.action';
import { getMenusLoading, getMenus } from 'src/app/core/store/selectors/menu.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  loadingMenus: boolean | undefined;
  menusTableData!: TableInfo;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menusTableData = {
      data: [],
      header: ['name', 'description', 'status']
    };
    this.store.dispatch(new LoadMenus());
    combineLatest(([this.store.select(getMenusLoading), this.store.select(getMenus)]))
      .subscribe(([loading, menus]) => {
        this.loadingMenus = loading;
        const data = !menus ? [] : menus.map((opt: any) => ({
          name: { type: 'link', value: opt.Name, url: `/menus/menu-update/${opt.MenuID}` },
          description: { type: 'text', value: opt.Description },
          status: {
            type: 'badge',
            value: opt.Active == 1 ? 'Active' : 'Inactive',
            class: opt.Active == 1 ? 'badge-success' : 'badge-danger'
          },
          'action': {
            type: 'button',
            value: opt.Status == 1 ? 'Disable' : 'Enable',
            class: opt.Status == 1 ? 'btn-danger' : 'btn-success'
          },
        }));
        this.menusTableData = {...this.menusTableData, data, loading}
      });
  }

}
