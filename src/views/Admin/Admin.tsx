import { Outlet } from "react-router-dom";
function Admin() {
  return (
    <>
      <h1>Admin</h1>
      <Outlet></Outlet>
    </>
  )
}
export default Admin;