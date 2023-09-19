import { login as loginApi, getUserMenu } from '../../api/auth'
import { SET_MENU, SET_ROUTES, SET_TOKEN, SET_USER } from '../Types'
import { UserType, LoginResponseType } from '../../types'
import { message, theme } from 'antd';
import type { ReactNode } from 'react'
import { Dispatch } from 'redux'
import { MenuItemType, OriginMenuItemType } from '../../types'
import LazyLoad from '../../utils/LazyLoad' 
import { baseRouter } from '../../router/baseRouter'
interface RouteItem {
  path: string
  element: ReactNode
}
export function login(data: UserType,callback: Function) {
  return (dispatch: Dispatch<any>) => {
    loginApi(data).then(
      (res: any) => {
        if(res.code == 200){
          sessionStorage.setItem('token', res.token)
          sessionStorage.setItem('userInfo', JSON.stringify(res.user))
          dispatch({type: SET_TOKEN, payload: res.token})
          dispatch({type: SET_USER, payload: res.user})
          callback()
          dispatch(getMenus())
        }else {
          message.error(res.msg)
        }
      }
    )
  }
}
export function getMenus(){
  return (dispatch: Dispatch) => {
    getUserMenu().then(
      (res: any) => {
        console.log(res)
        const menu = res.list
        const route = res.route
        function formaterMenu(menu: any) {
          menu.forEach((element: any) => {
            element.label = element.name
            element.key = element.path
            delete element.icon
            if(element.children && element.children.length > 0){
              formaterMenu(element.children)
            }
          });
        }
        function formaterRoute(route: any){
          let routerlist: any = []
          route.forEach((item: any) => {
            if(item.component){
              let obj: RouteItem = {
                path: item.path,
                element:  LazyLoad(item.component)
              }
              routerlist.push(obj)
            }
            if(item.children && item.children.length > 0){
              let result = formaterRoute(item.children)
              routerlist = routerlist.concat(result)
            }
          })
          return routerlist
        }
        let routerlist = formaterRoute(route)
        formaterMenu(menu)
        localStorage.setItem('menu', JSON.stringify(menu))
        localStorage.setItem('route', JSON.stringify(routerlist))
        dispatch({type: SET_MENU, payload: menu})
        //更新redux中的路由
        dispatch({type: SET_ROUTES, payload: routerlist})
      }
    )
  }
}