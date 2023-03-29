import request from '../utils/request';
import api from './api';
export const getCities = (payload) => request.get(api.cities, payload);
