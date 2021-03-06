import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
      config.headers.token = '';

      return config;
    },
    error => {
      // Do something with request error
      Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      return res.data
    } else {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug

    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

let http = {};
http.get = async (url, params, responseType = 'json') => {
  return service.get(url + '?time=' + new Date().getTime(), {
    responseType
  });
};

http.post = (url, data = {}) => {
  return service.post(url + '?time=' + new Date().getTime(), data);
};

Vue.prototype.$http = http;

export default http;
