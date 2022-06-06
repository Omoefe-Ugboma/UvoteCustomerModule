import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';

import { appEffects } from './core/store/effects';
import { appReducers } from './core/store/reducers/app.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { AppFooterComponent } from './layout/app-footer/app-footer.component';
import { AppNavbarComponent } from './layout/app-navbar/app-navbar.component';
import { AppSidebarComponent } from './layout/app-sidebar/app-sidebar.component';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptor/http-error.interceptor';
import { UserIdleModule } from 'angular-user-idle';



@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppNavbarComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CoreModule,
    SharedModule,

    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    UserIdleModule.forRoot({idle: environment.idle, timeout: environment.timer, ping: environment.ping}),
    environment.devToolModules,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
