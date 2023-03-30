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
  // 全部资讯
  {
    path: '/info',
    routes: [{ path: '/info', component: './info', title: 'info' }],
  },
  // 客服路由
  {
    path: '/services',
    routes: [{ path: '/services', component: './services', title: 'services' }],
  },
  // 客服路由
  {
    path: '/query',
    routes: [
      { path: '/query', component: './query', title: 'query' },
      { path: '/query?:id', component: './query', title: 'query' },
    ],
  },
  // 其他路由
  {
    path: '/',
    component: '@/layouts/MainLayout',
    routes: [
      { path: '/', component: './home', title: '首页' },
      { path: '/detail', component: './detail', title: '通知公告' },
      { path: '/orderList', component: './orderList', title: 'orderList' },
      { path: '/users', component: './user', title: 'user' },
      { path: '/info', component: './info', title: 'info' },
      { path: '/city', component: './city', title: 'city' },
    ],
  },
];
