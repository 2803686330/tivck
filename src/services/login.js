import request from '../utils/request';
import api from './api';
export const getLogin = (payload) => request.post(api.login, payload);
export const getReg = (payload) => request.post(api.reg, payload);
