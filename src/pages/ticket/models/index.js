import { history } from 'umi';
import api from '@/services';

// 全局
export default {
  namespace: 'ticket',

  state: {
    candidates: [], //购票数组
  },

  reducers: {
    setInfolist(state, { payload }) {
      const { candidates } = payload.data;
      return { ...state, candidates };
    },
  },

  effects: {
    // 购票数据
    *fetchInfoList({ payload }, { call, put }) {
      const res = yield call(api.getTicket, payload);
      if (!res.code) {
        yield put({
          type: 'setInfolist',
          payload: res,
        });
      }
    },
  },
};
