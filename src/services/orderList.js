import request from '../utils/request';
import api from './api';
export const getOrderList = (payload) => request.post(api.orderList, payload);
