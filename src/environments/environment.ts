// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export const environment = {
  production: false,
  storekey: '5632793ca209cfc39696271fc2c6a86f',
  baseApiUrl: 'https://iofserp.investment-one.com/api/v1/',
  activityCheck: 6,
  idle: 300,
  timer: 60,
  ping: 120,
  devToolModules: [
    StoreDevtoolsModule.instrument({
      maxAge: 25, logOnly: true
    })
  ],
  menu: [
    {
      name: 'Dashboard',
      link: '/dashboard',
      iconclass: 'fa fa-tachometer'
    },
    {
      name: 'Security',
      iconclass: 'fa fa-lock',
      submenu: [
        { name: 'Users', link: '/users/users-list' },
        { name: 'Groups', link: '/groups' },
        { name: 'Modules', link: '/modules' },
        { name: 'Sections', link: '/sections' },
        { name: 'Menus', link: '/menus' },
      ]
    },
    {
      name: 'Customers',
      iconclass: 'fa fa-users',
      link: '/customers'
    },
    {
      name: 'Customers II',
      iconclass: 'fa fa-users',
      link: '/customers/new'
    },
    {
      name: 'Customer Info',
      iconclass: 'fa fa-users',
      link: '/customers/info'
    },
    {
      name: 'Pending Customers',
      iconclass: 'fa fa-users',
      link: '/customers/pending'
    },
  ],
  // menu_access:[
  //   {
  //     name: 'Dashboard',
  //     link: '/dashboard',
  //     iconclass: 'fa fa-tachometer'
  //   },
  //   {
  //     name: 'Security',
  //     iconclass: 'fa fa-lock',
  //     submenu: [
  //       { name: 'Users', link: '/users/users-list' },
  //       { name: 'Groups', link: '/groups' },
  //       { name: 'Modules', link: '/modules' },
  //       { name: 'Sections', link: '/sections' },
  //       { name: 'Menus', link: '/menus' },
  //     ]
  //   },
  // ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
