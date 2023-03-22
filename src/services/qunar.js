import request from '../utils/request';
import api from './api';
export const getReg = (payload) => request.post(api.reg, payload);
export const getLogin = (payload) => request.post(api.login, payload);
export const getTravelList = (payload) => request.get(api.travelList, payload);
