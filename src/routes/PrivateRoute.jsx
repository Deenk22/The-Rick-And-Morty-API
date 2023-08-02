import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useUserLoginContext} from "../context/UserLoginContext";

export default function PrivateRoute({allowedRoles}) {
  console.log(allowedRoles);
  const location = useLocation();
  const {user} = useUserLoginContext();

  return allowedRoles.includes(user?.userRole) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{from: location}} replace />
  ) : (
    <Navigate to="/" state={{from: location}} replace />
  );
}
