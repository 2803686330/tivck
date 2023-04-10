import { history } from 'umi';
import api from '@/services';

export default {
  namespace: 'passengerDetail',

  state: {
    passengerLists: {},
  },

  reducers: {
    setPassenge(state, { payload }) {
      return {
        ...state,
        passengerLists: payload,
      };
    },
  },

  effects: {
    *fetchOrderInfo({ payload }, { call, put }) {
      const res = yield call(api.getPassengerInfo, payload);
      if (res.code === 200) {
        yield put({
          type: 'setPassenge',
          payload: res.data,
        });
      }
    },
  },
};
