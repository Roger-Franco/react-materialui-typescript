import axios from 'axios';

import {responseInterceptor, errorInterceptor } from './intercepters';

const Api = axios.create({
  baseURL: 'http://localhost:3333'
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (response) => errorInterceptor(response),
);

export {Api};