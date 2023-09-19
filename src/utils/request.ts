import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import NProgress from 'nprogress'
import { message } from 'antd';
import { config } from 'process'
NProgress.settings.showSpinner = false
const request = axios.create({
  baseURL: 'http://dida100.com:8888',
  timeout: 5000,
})
const token = sessionStorage.getItem('token')
request.interceptors.request.use((config) => {
  if(token){
    config.headers.Authorization = 'Bearer ' + token
  }
  NProgress.start()
  return config
})
request.interceptors.response.use(
  (res: AxiosResponse) => {
    NProgress.done()
    console.log(res)
    if(res.status === 500) {
      message.info("服务器错误")
    }else if(res.status === 404) {
      message.info("请求地址错误")
    }else if(res.status === 401) {
      message.info("没有权限")
    }else if(res.status === 400) {
      message.info("请求参数错误")
    }else {
      return res.data
    }
  },
  (err) => {
    NProgress.done()
    console.log(err, 'err')
    if(err.response.status == 401){
      message.info("没有权限")
    }
    return err
  }
)
export { request }