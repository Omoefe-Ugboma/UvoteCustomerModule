import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kyc-documents',
  templateUrl: './kyc-documents.component.html',
  styleUrls: ['./kyc-documents.component.css']
})
export class KycDocumentsComponent implements OnInit {

  @Input() item = '';
  @Input() customers!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
