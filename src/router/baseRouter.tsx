import Admin from '../views/Admin/Admin'
import Login from '../views/Login'
import Private from '../utils/Private'
export const baseRouter = [
  {
    path: '/',
    element: <Login></Login>
  },
  {
    path: '/admin/*',
    element: <Private><Admin></Admin></Private>
  }
]