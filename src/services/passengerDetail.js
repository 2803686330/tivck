import request from '../utils/request';
import api from './api';
export const getPassengerInfo = (payload) =>
  request.post(api.passengerInfo, payload);
