import request from '../utils/request';
import api from './api';

export const getQuery = (payload) => request.post(api.query, payload);

export const getTicket = (payload) => request.get(api.ticket, payload);
export const getOrder = (payload) => request.get(api.order, payload);
export const getPassengers = (payload) => request.post(api.passengers, payload);
export const getOrderList = (payload) => request.post(api.orderList, payload);
