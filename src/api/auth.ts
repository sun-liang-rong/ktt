import { request } from '../utils/request'
import { UserType, LoginResponseType } from '../types'
import { AxiosResponse } from 'axios'
export function login(data: UserType):Promise<AxiosResponse<LoginResponseType>> {
  return request.post('/api/login', data)
}
export function getUserMenu(){
  return request.get('/api/yp/user_permission')
}