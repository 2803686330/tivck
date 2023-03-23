import { pathToRegexp } from 'path-to-regexp';
import { history } from 'umi';
import is from 'is_js';
import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'index',

  state: {
    token: [],
  },

  reducers: {},

  effects: {
    // 智能模板消息列表数据
    *fetchLogin({ payload }, { call, put }) {
      const res = yield call(api.getLogin, payload);
      console.log(res);
      if (res.data.code == 200) {
        localStorage.setItem('token', res.data.token);
      }
    },
  },
};
