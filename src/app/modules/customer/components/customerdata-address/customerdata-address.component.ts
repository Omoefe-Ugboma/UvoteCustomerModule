import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdata-address',
  templateUrl: './customerdata-address.component.html',
  styleUrls: ['./customerdata-address.component.css']
})
export class CustomerdataAddressComponent implements OnInit {
  
  @Input() item = '';
  @Input() customers!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
