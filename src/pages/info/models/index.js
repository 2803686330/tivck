import _ from 'lodash';
import api from '@/services';

export default {
  namespace: 'info',

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
    *fetchTravelList({ payload }, { call, put }) {
      const res = yield call(api.getTravelList, payload);
      yield put({
        type: 'setTravelList',
        payload: res.data,
      });
    },
  },
};
