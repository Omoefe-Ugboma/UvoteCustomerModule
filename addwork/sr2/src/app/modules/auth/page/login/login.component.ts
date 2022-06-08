import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, combineLatest } from 'rxjs';
import { Login, ResetAuth } from 'src/app/core/store/actions/auth.action';
import { getAuthError, getAuthLoading } from 'src/app/core/store/selectors/auth.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_loading!: Observable<boolean>;;
  login_error: Observable<boolean> | undefined;
  model = { username: '', password: '', nationId: null };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Username',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        label: 'Password',
        type: 'password',
        required: true
      }
    },
  ];

  constructor(private store: Store<AppState>, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }

  userLogin(form: FormGroup) {
    if (form.valid) {
      const data = {...form.value, machine_name: 'Windows 10', ip_address: '127.0.0.1'};
      this.store.dispatch(new Login(data));
      this.login_loading = this.store.select(getAuthLoading);
      this.store.select(getAuthError).subscribe(error => {
        if (error) {
          this.notifyService.showError(error.msg);
          this.store.dispatch(new ResetAuth());
        }
      });
    }
  }

}
