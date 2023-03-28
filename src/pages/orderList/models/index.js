import _ from 'lodash';
import api from '@/services';

export default {
  namespace: 'orderList',

  state: {
    setOrderList: [], //订单列表
  },

  reducers: {
    //订单列表
    setOrder(state, { payload }) {
      return {
        ...state,
        setOrderList: payload,
      };
    },
  },

  effects: {
    // 订单列表
    *fetchOrderList({ payload }, { call, put }) {
      const res = yield call(api.getOrderList, payload);
      yield put({
        type: 'setOrder',
        payload: res.data,
      });
    },
  },
};
