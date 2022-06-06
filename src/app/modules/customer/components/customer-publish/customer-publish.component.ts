import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-publish',
  templateUrl: './customer-publish.component.html',
  styleUrls: ['./customer-publish.component.css']
})
export class CustomerPublishComponent implements OnInit {

  @Input() formtype: string = 'new_form';
  // @Output() publishButtonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // publishButton(action: string) {
  //   this.publishButtonClick.emit({ formtype: this.formtype, action });
  // }

}
