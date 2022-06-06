import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdatanextofkins',
  templateUrl: './customerdatanextofkins.component.html',
  styleUrls: ['./customerdatanextofkins.component.css']
})
export class CustomerdatanextofkinsComponent implements OnInit {
  
  @Input() item = '';
  @Input() customers!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
