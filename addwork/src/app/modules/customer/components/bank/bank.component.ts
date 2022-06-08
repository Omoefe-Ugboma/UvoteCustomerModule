import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit, OnChanges {

  @Input() banks: any = [];
  @Output() setBankUpdateValues= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.banks = changes.banks.currentValue;
  }

  bankUpdate(id: any) {
    this.setBankUpdateValues.emit(id);
  }

}
