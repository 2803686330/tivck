import { history } from 'umi';
import _ from 'lodash';
import api from '@/services';

// 全局
export default {
  namespace: 'reg',

  state: {
    token: [],
  },

  reducers: {},

  effects: {
    // 智能模板消息列表数据
    *fetchReg({ payload }, { call, put }) {
      const res = yield call(api.getReg, payload);
    },
  },
};
