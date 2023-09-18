import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import { config } from 'process'
const request = axios.create({
  baseURL: 'http://dida100.com:8888',
  timeout: 5000,
})
request.interceptors.request.use((config) => {
  return config
})
request.interceptors.response.use(
  (res: AxiosResponse) => {
  return res
  },
  (err: AxiosResponse) => {
    return err
  }
)
export { request }