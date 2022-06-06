import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdataphone',
  templateUrl: './customerdataphone.component.html',
  styleUrls: ['./customerdataphone.component.css']
})
export class CustomerdataphoneComponent implements OnInit {
  
  @Input() item = '';
  @Input() customers!:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
