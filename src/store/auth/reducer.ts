import { SET_TOKEN, SET_USER, SET_MENU, SET_ROUTES } from '../Types'
import type { IAction } from '../../types'
const initialState = {
  userInfo: {}, //用户信息
  token: "", 
  menu: JSON.parse(localStorage.getItem('menu') || '[]'), //动态菜单
  routes: JSON.parse(localStorage.getItem('route') || '[]'), //动态路由
}
function reducer(state=initialState, action: IAction) {
  switch(action.type) {
    //处理用户信息
    case SET_USER:
      return {...state, userInfo: action.payload}
      //处理token
    case SET_TOKEN:
      return {...state, token: action.payload}
      //处理菜单
    case SET_MENU: 
      return {...state, menu: action.payload}
      //处理路由信息
    case SET_ROUTES:
      return {...state, routes: action.payload}
    default:
      return state
  }
}
export default reducer