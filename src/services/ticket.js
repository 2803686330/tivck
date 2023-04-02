import request from '../utils/request';
import api from './api';

export const getTicket = (payload) => request.get(api.ticket, payload);
