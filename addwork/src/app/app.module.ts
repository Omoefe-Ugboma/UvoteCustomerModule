import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { appReducers } from './core/store/reducers/app.reducer';
import { appEffects } from './core/store/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';

import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { environment } from 'src/environments/environment';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppNavbarComponent } from './layout/app-navbar/app-navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorService } from './core/interceptor/http-error.service';
import { FormlyModule } from '@ngx-formly/core';
import { validationMessages } from './core/utils/form-validation';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AuthLayoutComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    CoreModule,

    AuthModule,

    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    environment.devToolModules,
    ModalModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FormlyModule.forRoot({ extras: { lazyRender: true }, validationMessages }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
