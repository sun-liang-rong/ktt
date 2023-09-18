import Admin from '../views/Admin/Admin'
import Login from '../views/Login'
export const baseRouter = [
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/admin/*',
    element: <Admin></Admin>
  }
]