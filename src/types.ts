export interface UserType {
    name: string;
    password: string;
}
export interface IAction {
    type: string
    payload?: any
}
export interface LoginResponseType {
    code: number
    token: string
    message?: string
    user: {
        name: string
        id: number
        score: string
        avatar: string
    }
}
export interface MenuItemType {
    label: string
    key: string
    children?: MenuItemType []
}
export interface OriginMenuItemType {
    name: string
    path: string
    children?: OriginMenuItemType []
}