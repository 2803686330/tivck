import request from '../utils/request';
import api from './api';
export const getTravelList = (payload) => request.get(api.travelList, payload);
