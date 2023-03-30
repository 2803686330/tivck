import _ from 'lodash';
import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile';
// 全局
export default {
  namespace: 'city',

  state: {
    hotCities: [], //热门城市
    cityList: [], //所有城市
    leftcity: '天津', //左边城市
    rightcity: '上海', //右边城市
  },

  reducers: {
    // 热门城市
    setHotCities(state, { payload }) {
      return {
        ...state,
        hotCities: payload.hotCities,
        cityList: payload.cityList,
      };
    },
    // 左边城市
    setleftcity(state, { payload }) {
      return {
        ...state,
        leftcity: payload,
      };
    },
    // 右边城市
    setrightcity(state, { payload }) {
      return {
        ...state,
        rightcity: payload,
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
    // 左边城市
    *fetchleftcity({ payload }, { call, put }) {
      yield put({
        type: 'setleftcity',
        payload,
      });
    },
    // 右边城市
    *fetchrightcity({ payload }, { call, put }) {
      yield put({
        type: 'setrightcity',
        payload,
      });
    },
  },
};
