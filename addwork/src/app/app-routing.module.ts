import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { NoAuthGuard } from './core/guard/no-auth.guard';

import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'groups',
        loadChildren: () =>
          import('./modules/group/group.module').then(m => m.GroupModule)
      },
      {
        path: 'modules',
        loadChildren: () =>
          import('./modules/module/modules.module').then(m => m.ModulesModule)
      },
      {
        path: 'sections',
        loadChildren: () =>
          import('./modules/section/section.module').then(m => m.SectionModule)
      },
      {
        path: 'menus',
        loadChildren: () =>
          import('./modules/menu/menu.module').then(m => m.MenuModule)
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./modules/customer/customer.module').then(m => m.CustomerModule)
      },
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
