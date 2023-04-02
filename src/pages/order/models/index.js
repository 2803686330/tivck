import { history } from 'umi';
import api from '@/services';

// 全局
export default {
  namespace: 'order',

  state: {},

  reducers: {},

  effects: {
    *fetchOrderInfo({ payload }, { call, put }) {
      const res = yield call(api.getOrder, payload);
      console.log(res);
    },
  },
};
