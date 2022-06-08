import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input()
  public tableData!: TableInfo;
  @Output() buttonClick = new EventEmitter();

  displayedColumns: string[] | undefined;
  columnsToDisplay: string[] | undefined;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = this.tableData?.header;
    this.columnsToDisplay = this.displayedColumns?.slice();
    this.dataSource.data = this.tableData?.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
    const tableData: TableInfo = changes.tableData.currentValue;
    this.tableData = tableData;
    this.displayedColumns = this.tableData.header;
    this.columnsToDisplay = this.displayedColumns.slice();
    this.dataSource.data = this.tableData.data;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  clickEvent(id: any) {
    this.buttonClick.emit(id);
  }

  isNumber(val: any) {
    return !isNaN(val);
  }

  isString(val: any) {
    return typeof val === 'string';
  }

  isNegativeNumber(val: any) {
    return this.isNumber(val) && val < 0 && (typeof val === 'number');
  }

}

export interface TableInfo {
  table_name?: string;
  header: string[];
  data: any[];
  filter?: TableFilter;
  loading?: boolean;
}

export interface TableFilter {
  filter_label: string;
  filter_placeholder: string;
}
