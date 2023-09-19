import { FC } from 'react';
import { Navigate } from 'react-router-dom'
interface IProps {
  children: any
}
const Private: FC<IProps> = (props) => {
  const token = sessionStorage.getItem('token');
  console.log(window.location, 'window.location.pathname')
  if(token) {
    return <>{props.children}</>;
  }else {
    return <Navigate to={"/?redirect=" + window.location.pathname}></Navigate>
  }
}
export default Private;