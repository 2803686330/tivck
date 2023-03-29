import _ from 'lodash';
import api from '@/services';
import { history } from 'umi';
import { Toast } from 'antd-mobile';
// 全局
export default {
  namespace: 'index',

  state: {
    token: '',
    setToken: [],
  },

  reducers: {
    setTokens(state, { payload }) {
      const { token } = payload;
      return {
        ...state,
        token,
      };
    },
  },

  effects: {
    // 登录
    *fetchLogin({ payload }, { call, put }) {
      const res = yield call(api.getLogin, payload);
      if (_.get(res, 'data.code') === 200) {
        yield put({
          type: 'setTokens',
          payload: res.data,
        });
        localStorage.setItem('userInfo', JSON.stringify(res.data));
        localStorage.setItem('token', res.data.token);
        history.push('/');
      }
    },
  },
};
