import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { LoadSections } from 'src/app/core/store/actions/section.action';
import { getSectionsLoading, getSections } from 'src/app/core/store/selectors/section.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { TableInfo } from 'src/app/shared/component/datatable/datatable.component';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  loadingSections: boolean | undefined;
  sectionsTableData!: TableInfo;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections() {
    this.sectionsTableData = {
      data: [],
      header: ['name', 'description', 'status']
    };
    this.store.dispatch(new LoadSections());
    combineLatest(([this.store.select(getSectionsLoading), this.store.select(getSections)]))
      .subscribe(([loading, sections]) => {
        this.loadingSections = loading;
        const data = !sections ? [] : sections.map((opt: any) => ({
          name: { type: 'link', value: opt.Name, url: `/sections/section-update/${opt.SectionID}` },
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
        this.sectionsTableData = {...this.sectionsTableData, data, loading}
      });
  }

}
