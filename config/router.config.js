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
  // 其他路由
  {
    path: '/',
    component: '@/layouts/MainLayout',
    routes: [
      { path: '/home', component: './home', title: '首页' },
      { path: '/detail', component: './detail', title: '通知公告' },
    ],
  },
];
