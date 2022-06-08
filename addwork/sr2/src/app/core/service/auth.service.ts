import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoteCallService } from './remote-call.service';
import { AppState } from 'src/app/core/store/state/app.state';
import { map, tap } from 'rxjs/operators';
import { User } from '../schema/user';
import { BehaviorSubject } from 'rxjs';
import { AppStorage } from '../utils/storage';
import { AppConfig } from 'src/app/app.config';

import { ResetUsers } from 'src/app/core/store/actions/user.action';
import { ResetAuth, Logout } from 'src/app/core/store/actions/auth.action';
import { ResetGroups } from 'src/app/core/store/actions/group.action';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private userSubject$ = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private remoteCall: RemoteCallService, private store: Store<AppState>) { }

  login(auth: any) {
    return this.remoteCall.guestPost('login', auth).pipe(
      map((result) => {
        if (result && result.status === true && result.code === 200) {
          const user = result.data.user;
          if (result.data.token) {
            this.loggedIn = true;
            AppStorage.set('token', result.data.token);
            AppStorage.set('currentUser', result.data.user);
            this.updateActivityTime();
          }
          return user;
        }
        return result;
      }),
      tap((user: User) => this.userSubject$.next(user))
    );
  }

  isAuthenticated() {
    return this.isLoggedIn() && AppStorage.get('token');
  }

  isLoggedIn() {
    if (!this.loggedIn && !this.lastActivityOkay()) {
      this.logout();
    }
    return this.loggedIn || this.lastActivityOkay();
  }

  logout() {
    return this.remoteCall.authPost(`user/logout`, {});
  }

  clearStore() {
    this.loggedIn && this.store.dispatch(new Logout());
    this.loggedIn = false;
    this.store.dispatch(new ResetAuth());
    this.store.dispatch(new ResetUsers());
    this.store.dispatch(new ResetGroups());
    AppStorage.clear();
  }

  lastActivityOkay() {
    let last = AppStorage.get('lastActivity');
    if (last) {
      last = new Date(last);
      const current = new Date();
      const diff = current.getTime() - last.getTime();
      const diffDays = Math.floor(diff / 86400000); // days
      const diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
      const diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes

      if (diffDays === 0 && diffHrs === 0 && diffMins < AppConfig.activityCheck) {
        this.loggedIn = true;
        return true;
      }
      return false;
    }
    return false;
  }

  updateActivityTime() {
    AppStorage.set('lastActivity', new Date());
  }
}
