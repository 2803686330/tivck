import { history } from 'umi';
import api from '@/services';

// 全局
export default {
  namespace: 'passengers',

  state: {
    passengersList: [],
  },

  reducers: {
    setList(state, { payload }) {
      return { ...state, passengersList: payload.data };
    },
  },

  effects: {
    *fetchList({ payload }, { call, put }) {
      const res = yield call(api.getPassengers, payload);
      if (res.code === 200) {
        yield put({
          type: 'setList',
          payload: res,
        });
      }
    },
  },
};
