import axios, { AxiosResponse } from 'axios';
import queryString from 'query-string';
let url;
if (process.env.NODE_ENV === 'development') {
  url = process.env.REACT_APP_DEV_SERVER_URL;
} else {
  url = process.env.REACT_APP_PROD_SERVER_URL;
}
const axiosClient = axios.create({
  baseURL: url,

  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.response.use((response) => {
  if (response) {
    return response;
  }
});

export default axiosClient;
