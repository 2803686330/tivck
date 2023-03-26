import _ from 'lodash';
import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile';

export default {
  namespace: 'home',

  state: {
    travelList: [],
  },

  reducers: {
    setTravelList(state, { payload }) {
      return {
        ...state,
        travelList: payload,
      };
    },
  },

  effects: {
    // 登录
    *fetchTravelList({ payload }, { call, put }) {
      const res = yield call(api.getTravelList, payload);
      yield put({
        type: 'setTravelList',
        payload: res.data,
      });
    },
  },
};
