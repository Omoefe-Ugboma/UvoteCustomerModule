import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdataemail',
  templateUrl: './customerdataemail.component.html',
  styleUrls: ['./customerdataemail.component.css']
})
export class CustomerdataemailComponent implements OnInit {

  @Input() item = '';
  @Input() customers!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
