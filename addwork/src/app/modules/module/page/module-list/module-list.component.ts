import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { LoadModules } from 'src/app/core/store/actions/module.action';
import { getModulesLoading, getModules } from 'src/app/core/store/selectors/module.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  loadingModules: boolean | undefined;
  modulesTableData!: TableInfo;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getModules();
  }

  getModules() {
    this.modulesTableData = {
      data: [],
      header: ['name', 'description', 'status']
    };
    this.store.dispatch(new LoadModules());
    combineLatest(([this.store.select(getModulesLoading), this.store.select(getModules)]))
      .subscribe(([loading, modules]) => {
        this.loadingModules = loading;
        const data = !modules ? [] : modules.map((opt: any) => ({
          name: { type: 'link', value: opt.Name, url: `/modules/module-update/${opt.ModuleID}` },
          description: { type: 'text', value: opt.Description },
          status: {
            type: 'badge',
            value: opt.Active == 1 ? 'Active' : 'Inactive',
            class: opt.Active == 1 ? 'badge-success' : 'badge-danger'
          }
        }));
        this.modulesTableData = {...this.modulesTableData, data, loading}
      });
  }

}
