export const environment = {
  production: true,
  storekey: '5632793ca209cfc39696271fc2c6a86f',
  baseApiUrl: 'https://iofserp.investment-one.com/api/v1/',
  activityCheck: 6,
  idle: 300,
  timer: 60,
  ping: 120,
  devToolModules: [],
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
  ]
};
