import request from '../utils/request';
import api from './api';

export const getOrder = (payload) => request.get(api.order, payload);
export const getPassengers = (payload) => request.post(api.passengers, payload);
export const getOrderList = (payload) => request.post(api.orderList, payload);