export default [
  // 其他基础路由
  {
    path: '/',
    // component: "@/layouts/MainLayout",
    wrappers: ['@/pages/authorized'],
    routes: [
      { path: '/reg', component: './reg', title: '注册' },
      { path: '/login', component: './login', title: '登录' },
      { path: '/', component: './detail', title: '通知公告' },
    ],
  },
];
