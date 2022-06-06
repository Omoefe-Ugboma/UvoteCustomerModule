import { Injectable } from '@angular/core';
import { HttpCallsService } from './http-calls.service';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AppStorage } from '../utils/storage';
import { LoginReq, LoginUser } from '../schema/login.schema';
import { BehaviorSubject } from 'rxjs';
import { Logout } from '../store/actions/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private userSubject$ = new BehaviorSubject<LoginUser | null>(null);
  user$ = this.userSubject$.asObservable();

  constructor(private httpcall: HttpCallsService, private store: Store<AppState>) {
    const user = AppStorage.get('currentUser');
    if (user) {
      this.userSubject$.next(user);
    }
  }

  login(data: LoginReq) {
    return this.httpcall.guestPost('login', data).pipe(
      map((resp) => {
        if (resp && resp.status === true && resp.code === 200) {
          const user = resp.data.user;
          if (resp.data.token) {
            this.loggedIn = true;
            AppStorage.set('token', resp.data.token);
            AppStorage.set('currentUser', resp.data.user);
            this.updateActivityTime();
          }
          return user;
        }
        return resp;
      }),
      tap((user: LoginUser) => this.userSubject$.next(user))
    );
  }

  logout() {
    this.loggedIn && this.store.dispatch(new Logout());
    this.loggedIn = false;
    AppStorage.clear();
  }

  logoutUser() {
    return this.httpcall.authPost(`user/logout`, {});
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

      if (diffDays === 0 && diffHrs === 0 && diffMins < environment.activityCheck) {
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

  isLoggedIn() {
    if (!this.loggedIn && !this.lastActivityOkay()) {
      this.logout();
    }
    return this.loggedIn || this.lastActivityOkay();
  }

  isAuthenticated() {
    return this.isLoggedIn() && AppStorage.get('token');
  }

  getUserIP() {}
}
