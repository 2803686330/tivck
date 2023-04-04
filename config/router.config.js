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
  // 购票详情
  {
    path: '/ticket',
    routes: [
      { path: '/ticket', component: './ticket', title: 'ticket' },
      { path: '/ticket?:id', component: './ticket', title: 'ticket' },
    ],
  },
  // 订单填写
  {
    path: '/order',
    routes: [
      { path: '/order', component: './order', title: 'order' },
      { path: '/order?:id', component: './order', title: 'order' },
    ],
  },
  // 订单填写
  {
    path: '/passengers',
    routes: [
      { path: '/passengers', component: './passengers', title: 'passengers' },
      {
        path: '/passengers?:id',
        component: './passengers',
        title: 'passengers',
      },
    ],
  },
  // 新增乘客
  {
    path: '/passengerDetail',
    routes: [
      {
        path: '/passengerDetail',
        component: './passengerDetail',
        title: 'passengerDetail',
      },
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
