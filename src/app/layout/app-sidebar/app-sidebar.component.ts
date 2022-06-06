import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/core/store/state/app.state';
import { getCurrentUser } from 'src/app/core/utils/auth-utils';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { NotificationService } from 'src/app/shared/service/notification.service';
// import { UserAccessMenu } from './../../core/schema/menu.schema';
import { LoadUserMenu } from 'src/app/core/store/actions/user.action';
import { Observable } from 'rxjs';
import {
  getUserError,
  getUserMenu,
  getUserMenuLoading,
} from './../../core/store/selectors/user.selector';
import { ClearAuthError } from 'src/app/core/store/actions/auth.action';
import { UserAccessMenu } from 'src/app/core/schema/menu.schema';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css'],
})
export class AppSidebarComponent implements OnInit {
  current_user = getCurrentUser();
  menus = environment.menu;
  // menuaccess = environment.menuaccess;
  user_menu!: UserAccessMenu[];
  usermenu_loading!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private toastr: NotificationService
  ) {}

  ngOnInit(): void {
    this.userAccessMenu();
  }

  userAccessMenu() {
    this.store.dispatch(new LoadUserMenu());
    this.usermenu_loading = this.store.select(getUserMenuLoading);

    this.store.select(getUserMenu).subscribe((accessmenu) => {
      if (accessmenu) {
        this.user_menu = accessmenu;
      }
    });
  }
}
