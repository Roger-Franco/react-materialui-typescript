import axios from 'axios';

import { Environment } from '../../../environment';
import {responseInterceptor, errorInterceptor } from './intercepters';

const Api = axios.create({
  baseURL: Environment.URL_BASE
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (response) => errorInterceptor(response),
);

export {Api};