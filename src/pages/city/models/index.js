import _ from 'lodash';
import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile';
// 全局
export default {
  namespace: 'city',

  state: {
    cityList: [], //所有城市
    hotCities: [], //热门城市
  },

  reducers: {
    // 热门城市
    setHotCities(state, { payload }) {
      return {
        ...state,
        hotCities: payload.hotCities,
      };
    },
  },

  effects: {
    // 获取城市
    *fetchLogin({ payload }, { call, put }) {
      const res = yield call(api.getCities, payload);
      yield put({
        type: 'setHotCities',
        payload: res.data,
      });
    },
  },
};
