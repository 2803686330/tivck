export default [
  {
    path: '/user',
    routes: [
      {
        path: '/user/login',
        component: './login',
        title: '登录',
      },
      { path: '/user/home', component: './home', title: '注册' },
    ],
  },
  // 其他基础路由
  {
    path: '/',
    component: '@/layouts/MainLayout',
    wrappers: ['@/pages/authorized'],
    routes: [{ path: '/', component: './detail', title: '通知公告' }],
  },
];
