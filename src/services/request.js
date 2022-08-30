import axios from "axios";

import localCache from "../utils/localCache";
import { BASE_URL, TIME_OUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // headers: {
  //   Authorization: 'Bearer ' + localCache.getItem('token')
  // }
})


instance.interceptors.request.use(config => {
  const token = localCache.getItem('token')
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }

  return config
}, err => {
  console.log(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('请求错误')
        break
      case 401:
        console.log('未授权访问');
        break
      default:
        return err.response
    }
  }

  return err
})

export default instance