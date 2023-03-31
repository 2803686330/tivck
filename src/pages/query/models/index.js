import _ from 'lodash';
import api from '@/services';

export default {
  namespace: 'query',

  state: {
    queryList: [], //列表
  },

  reducers: {
    //列表
    setQuery(state, { payload }) {
      return {
        ...state,
        queryList: payload.data.dataMap.directTrainInfo.trains,
      };
    },
  },

  effects: {
    // 列表
    *fetchQuery({ payload }, { call, put }) {
      const res = yield call(api.getQuery, payload);
      if (res.data.msg === '操作成功') {
        yield put({
          type: 'setQuery',
          payload: res,
        });
      }
    },
  },
};
