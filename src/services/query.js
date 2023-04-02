import request from '../utils/request';
import api from './api';

export const getQuery = (payload) => request.post(api.query, payload);
