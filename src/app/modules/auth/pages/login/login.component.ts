import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginReq, LoginFields } from 'src/app/core/schema/login.schema';
import { ClearAuthError, Login } from 'src/app/core/store/actions/auth.action';
import { getAuthError, getAuthLoading } from 'src/app/core/store/selectors/auth.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { FormOptions } from 'src/app/shared/component/form/form.component';
import { NotificationService } from 'src/app/shared/service/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginReq = { username: '', password: '', ip_address: '127.0.0.1', machine_name: 'none' };
  fields = LoginFields;
  login_loading!: Observable<boolean>;
  formoptions: FormOptions = {
    button: { buttonValue: 'Login', classes: '' }
  }

  constructor(private store: Store<AppState>, private toastr: NotificationService) { }

  ngOnInit(): void {
  }

  userLogin(form: FormGroup) {
    if (form.valid) {
      this.store.dispatch(new Login(form.value));
      this.login_loading = this.store.select(getAuthLoading);
      this.store.select(getAuthError).subscribe(error => {
        if (error) {
          this.toastr.showError(error.message );
          this.store.dispatch(new ClearAuthError());
        }
      })
    }
  }

}
