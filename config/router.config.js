export default [
  {
    path: '/user',
    routes: [
      {
        path: '/user/login',
        component: './login',
        title: '登录',
      },
      { path: '/user/reg', component: './reg', title: '注册' },
    ],
  },
  {
    path: '/info',
    routes: [{ path: '/info', component: './info', title: 'info' }],
  },
  // 其他路由
  {
    path: '/',
    component: '@/layouts/MainLayout',
    routes: [
      { path: '/', component: './home', title: '首页' },
      { path: '/detail', component: './detail', title: '通知公告' },
      { path: '/orderList', component: './orderList', title: 'orderList' },
      { path: '/services', component: './services', title: 'services' },
      { path: '/users', component: './user', title: 'user' },
      { path: '/info', component: './info', title: 'info' },
      { path: '/city', component: './city', title: 'city' },
    ],
  },
];
