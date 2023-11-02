import axios from "axios";

const baseURL = "https://api.it120.cc/xiaochengxu/";
const instance = axios.create({
  baseURL: baseURL,
  headers:{
    'Content-Type': 'application/x-www-form-urlencoded',
  }
});
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance
