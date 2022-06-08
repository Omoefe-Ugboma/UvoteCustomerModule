import { Component, OnInit } from '@angular/core';
import { getCurrentUser } from 'src/app/core/utils/auth-utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent implements OnInit {
  current_user = getCurrentUser();
  constructor() { }

  ngOnInit(): void {
  }

}
