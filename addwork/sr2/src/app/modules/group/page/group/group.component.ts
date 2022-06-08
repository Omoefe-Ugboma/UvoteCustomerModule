import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadGroups } from 'src/app/core/store/actions/group.action';
import { AppState } from 'src/app/core/store/state/app.state';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';
import { getGroups, getGroupsLoading } from 'src/app/core/store/selectors/group.selector';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  loading_groups!: boolean;
  groupsTableData!: TableInfo;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups() {
    this.groupsTableData = {
      data: [],
      header: ['name', 'description', 'status']
    };
    this.store.dispatch(new LoadGroups());
    combineLatest(([this.store.select(getGroupsLoading), this.store.select(getGroups)]))
      .subscribe(([loading, groups]) => {
        this.loading_groups = loading;
        const data = !groups ? [] : groups.map((opt: any) => ({
          name: { type: 'link', value: opt.GroupName, url: `/groups/group-item/${opt.ID}` },
          description: { type: 'text', value: opt.Description },
          status: {
            type: 'badge',
            value: opt.Active == 1 ? 'Active' : 'Inactive',
            class: opt.Active == 1 ? 'badge-success' : 'badge-danger'
          }
        }));
        this.groupsTableData = {...this.groupsTableData, data, loading}
      });
  }

}
