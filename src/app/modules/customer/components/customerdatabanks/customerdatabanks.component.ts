import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdatabanks',
  templateUrl: './customerdatabanks.component.html',
  styleUrls: ['./customerdatabanks.component.css']
})
export class CustomerdatabanksComponent implements OnInit {
  
  @Input() item = '';
  @Input() customers!:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
